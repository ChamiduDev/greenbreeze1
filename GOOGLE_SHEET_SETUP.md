# Google Sheets Setup Guide for Kandy Events Calendar

This guide will help you set up a Google Sheet to store and manage Kandy's daily and monthly events, which will be displayed on the landing page calendar.

## Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it something like "Kandy Events Calendar"

## Step 2: Set Up the Sheet Structure

Your Google Sheet should have the following columns in the first row (header row):

| Date | Event Name | Type | Description | Time |
|------|------------|------|-------------|------|
| 01/15/2024 | Kandy Esala Perahera | Monthly | The grand procession festival | 7:00 PM |
| 02/14/2024 | Valentine's Day Special | Daily | Romantic dinner packages | 6:00 PM |

### Column Descriptions:

- **Date** (Required): The date of the event. Format: `MM/DD/YYYY` or `YYYY-MM-DD`
  - Examples: `01/15/2024`, `2024-01-15`
  
- **Event Name** (Required): The name/title of the event
  - Example: `Kandy Esala Perahera`, `Full Moon Poya Day`
  
- **Type** (Required): Either `Daily` or `Monthly`
  - `Daily`: Events that occur on specific dates
  - `Monthly`: Recurring monthly events or month-long celebrations
  
- **Description** (Optional): Additional details about the event
  - Example: `The grand procession festival with traditional dancers and elephants`
  
- **Time** (Optional): The time of the event (for daily events)
  - Example: `7:00 PM`, `10:00 AM`, `All Day`

## Step 3: Make the Sheet Public

1. Click the **"Share"** button in the top-right corner of your Google Sheet
2. Click **"Change to anyone with the link"**
3. Set the permission to **"Viewer"** (read-only)
4. Click **"Done"**
5. Copy the link that appears

## Step 4: Get Your Sheet ID

From the Google Sheets URL, extract the Sheet ID:

```
https://docs.google.com/spreadsheets/d/{SHEET_ID}/edit#gid=0
```

For example, if your URL is:
```
https://docs.google.com/spreadsheets/d/1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p/edit#gid=0
```

Then your Sheet ID is: `1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p`

## Step 5: Configure the Application

1. Create a `.env.local` file in the root of your project (if it doesn't exist)

2. Add your Sheet ID to the `.env.local` file:
   ```
   NEXT_PUBLIC_GOOGLE_SHEET_ID=your_sheet_id_here
   ```

3. If you have multiple tabs in your sheet and want to use a specific one, you can also set:
   ```
   NEXT_PUBLIC_GOOGLE_SHEET_GID=0
   ```
   (The GID is the number after `#gid=` in your sheet URL)

4. Your `.env.local` file should look like this:
   ```
   # Google Sheets Configuration
   NEXT_PUBLIC_GOOGLE_SHEET_ID=1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p
   # NEXT_PUBLIC_GOOGLE_SHEET_GID=0  # Optional, defaults to 0
   ```

5. Save the file

## Step 6: Restart Your Development Server

After updating the environment variables, restart your Next.js development server:

```bash
npm run dev
```

## Example Data

Here's an example of how your sheet should look:

| Date | Event Name | Type | Description | Time |
|------|------------|------|-------------|------|
| 01/15/2024 | Kandy Esala Perahera | Monthly | The grand procession festival with traditional dancers | 7:00 PM |
| 02/14/2024 | Valentine's Day Special | Daily | Romantic dinner packages at the villa | 6:00 PM |
| 03/20/2024 | Spring Equinox Celebration | Daily | Special sunrise yoga session | 6:00 AM |
| 04/13/2024 | Sinhala and Tamil New Year | Monthly | Traditional New Year celebrations | All Day |
| 05/01/2024 | May Day Festival | Daily | Local cultural festival | 10:00 AM |

## Tips

- **Keep dates consistent**: Use the same date format throughout (MM/DD/YYYY is recommended)
- **Update regularly**: Add new events as they are scheduled
- **Use descriptions**: Helpful descriptions make the calendar more informative
- **Time format**: Use a clear time format like "7:00 PM" or "10:00 AM"
- **Multiple events per day**: You can have multiple rows with the same date for multiple events on the same day

## Troubleshooting

### Events not showing up?

1. **Check Sheet ID**: Make sure your `NEXT_PUBLIC_GOOGLE_SHEET_ID` is correct
2. **Check permissions**: Ensure your sheet is set to "Anyone with the link can view"
3. **Check date format**: Dates must be in a valid format (MM/DD/YYYY or YYYY-MM-DD)
4. **Check browser console**: Open browser developer tools and check for any error messages

### Date parsing issues?

- Make sure dates are in a consistent format
- Avoid using text like "January 15, 2024" - use numeric formats instead
- Check that the Date column header is exactly "Date" (case-sensitive)

### Need to use a different tab?

If your events are on a different tab (sheet) within the spreadsheet:
1. Click on the tab you want to use
2. Look at the URL - it will have `#gid=1234567890` at the end
3. Use that number as your `NEXT_PUBLIC_GOOGLE_SHEET_GID` value

## Alternative: Using the Component Directly

You can also pass the Sheet ID directly to the component in your code:

```tsx
<KandyEventsCalendar 
  sheetId="your_sheet_id_here" 
  gid="0" 
/>
```

This is useful if you want to use different sheets for different pages or don't want to use environment variables.

