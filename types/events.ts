export type EventType = "Daily" | "Monthly" | "All Day";

export interface Event {
  date: Date;
  eventName: string;
  type: EventType;
  description?: string;
  time?: string;
}

export interface ParsedEvent {
  Date: string;
  "Event Name": string;
  Type: string;
  Description?: string;
  Time?: string;
}

