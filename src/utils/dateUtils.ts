// Format date to "Friday, November 10th 2023" format
export function formatEventDate(date: Date | string): string {
  // Convert to Date object if it's a string
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  
  const options: Intl.DateTimeFormatOptions = { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  };
  
  const formattedDate = dateObj.toLocaleDateString('en-US', options);
  
  // Add the ordinal suffix
  return formattedDate.replace(/(\d+)/, (match: string) => {
    const day = parseInt(match);
    if (day >= 11 && day <= 13) {
      return day + "th";
    }
    
    switch (day % 10) {
      case 1: return day + "st";
      case 2: return day + "nd";
      case 3: return day + "rd";
      default: return day + "th";
    }
  });
}


export function createDatePrefix(day: number): string {
  if (day >= 11 && day <= 13) {
    return "th";
  }
  
  switch (day % 10) {
    case 1: return "st";
    case 2: return "nd";
    case 3: return "rd";
    default: return "th";
  }
}
