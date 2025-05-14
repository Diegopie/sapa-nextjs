export interface Events {
  id: string;
  date: string;         // ISO date string (kept for compatibility and filtering)
  startTime: string;    // Full ISO datetime string with timezone
  endTime: string;      // Full ISO datetime string with timezone
  location: string;
  city: string;
  type: string;
  isSpecialEvent?: boolean;
  specialEventName?: string;
}
