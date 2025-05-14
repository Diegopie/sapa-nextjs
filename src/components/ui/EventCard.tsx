import { Events } from "@models/index";
import { createDatePrefix } from "@utils/dateUtils";
import Link from "next/link";

interface EventCardProps {
  event: Events;
}

export default function EventCard({ event }: EventCardProps) { 
  const startDateObj = new Date(event.startTime);
  const endDateObj = new Date(event.endTime);
  
  const day = startDateObj.getDate();
  const datePrefix = createDatePrefix(day);
  
  const dayName = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(startDateObj);
  const monthName = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(startDateObj);
  const year = startDateObj.getFullYear();

  const formatStartEnd = (time: Date) => {
    return time.toLocaleTimeString('en-US', { 
    hour: 'numeric', 
    minute: 'numeric', 
    hour12: true 
  });
  }
  
  const formattedStartTime = formatStartEnd(startDateObj)
  
  const formattedEndTime = formatStartEnd(endDateObj)
  
  return (
    <div className="flex flex-col md:flex-row flex-wrap bg-gray-100 rounded-lg overflow-hidden border border-gray-200 items-center">
      {/* Left side - Location */}
      <div className="md:w-1/4 py-6 px-4 flex items-center justify-center text-center">
        <h3 className="text-green-800 font-interstate font-medium text-3xl md:text-2xl">
          {event.location}
          {event.city && <span><br />{event.city}</span>}
        </h3>
      </div>
      
      {/* Middle - Date and Time */}
      <div className="md:w-2/4 py-6 px-4">
        <p className="text-green-900 font-interstate font-semibold text-3xl md:text-4xl mb-1">
          {dayName}, {monthName} {day}<sup className="text-xs font-normal">{datePrefix}</sup> {year}
        </p>        
        <p className="text-green-700 text-xl md:text-2xl font-interstate">
          {formattedStartTime} - {formattedEndTime}
        </p>
        <p className="text-green-700 text-xl md:text-2xl font-interstate mt-1">
          {event.type}
        </p>
      </div>
      
      {/* Right side - Book Button */}
      <div className="md:w-1/4 py-6 px-4 flex items-center justify-center">
        <Link 
          href="/appointments" 
          className="bg-orange-200 text-gray-800 text-2xl px-6 py-2 rounded-full font-interstate hover:bg-orange-300 transition-colors text-center"
        >
          Book Time
        </Link>
      </div>
    </div>
  );
}
