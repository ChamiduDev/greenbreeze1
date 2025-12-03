import Papa from "papaparse";
import { Event, ParsedEvent } from "@/types/events";

export async function fetchEventsFromGoogleSheet(
  sheetId: string,
  gid: string = "0"
): Promise<Event[]> {
  try {
    const csvUrl = `https://docs.google.com/spreadsheets/d/${sheetId}/export?format=csv&gid=${gid}`;
    
    const response = await fetch(csvUrl);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch Google Sheet: ${response.statusText}`);
    }
    
    const csvText = await response.text();
    
    return new Promise((resolve, reject) => {
      Papa.parse<ParsedEvent>(csvText, {
        header: true,
        skipEmptyLines: true,
        complete: (results) => {
          try {
            const events = results.data
              .map((row): Event | null => {
                // Parse date - handle multiple formats
                let date: Date;
                const dateStr = row.Date?.trim();
                
                if (!dateStr) {
                  return null;
                }
                
                // Try parsing different date formats
                date = new Date(dateStr);
                
                // Check if date is valid
                if (isNaN(date.getTime())) {
                  // Try MM/DD/YYYY format
                  const parts = dateStr.split("/");
                  if (parts.length === 3) {
                    date = new Date(
                      parseInt(parts[2]),
                      parseInt(parts[0]) - 1,
                      parseInt(parts[1])
                    );
                  } else {
                    console.warn(`Invalid date format: ${dateStr}`);
                    return null;
                  }
                }
                
                // Validate date again
                if (isNaN(date.getTime())) {
                  console.warn(`Could not parse date: ${dateStr}`);
                  return null;
                }
                
                const typeStr = row.Type?.trim() || "";
                let type: Event["type"];
                if (typeStr === "Monthly") {
                  type = "Monthly";
                } else if (typeStr === "All Day") {
                  type = "All Day";
                } else {
                  type = "Daily";
                }
                
                return {
                  date,
                  eventName: row["Event Name"]?.trim() || "",
                  type,
                  description: row.Description?.trim(),
                  time: row.Time?.trim(),
                };
              })
              .filter((event): event is Event => event !== null);
            
            resolve(events);
          } catch (error) {
            reject(new Error(`Failed to parse events: ${error instanceof Error ? error.message : "Unknown error"}`));
          }
        },
        error: (error: Error) => {
          reject(new Error(`CSV parsing error: ${error.message}`));
        },
      });
    });
  } catch (error) {
    throw new Error(
      `Failed to fetch events from Google Sheet: ${error instanceof Error ? error.message : "Unknown error"}`
    );
  }
}

