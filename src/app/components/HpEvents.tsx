import { services } from "@services/index";
import EventCard from "@components/ui/EventCard";
import { Events } from "@models/index";

export default async function HpEvents() {
  // Fetch the top 3 upcoming events (server component)
  const events = await services.eventsService.getEvents(3);
  
  return (
    <div className="max-w-7xl mx-auto mb-16">
      <h1 className="text-4xl font-proximaNova font-bold text-green-900 mb-8 text-center">
        Upcoming Utah Medical Card Events
      </h1>
      
      <div className="space-y-6">
        {events.map((event: Events) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}
