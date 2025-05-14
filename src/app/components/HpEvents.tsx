import { services } from "@services/index";
import EventCard from "@components/ui/EventCard";
import { Events } from "@models/index";

export default async function HpEvents() {
  const events = await services.eventsService.getEvents(3);

  return (
    <section 
      className="max-w-7xl mx-auto mb-16"
      role="region"
      aria-label="Upcoming Utah Medical Card Events"
    >
      <h2 className="text-4xl font-proximaNova font-bold text-green-900 mb-8 text-center">
        Upcoming Utah Medical Card Events
      </h2>

      <div className="space-y-6">
        {events.map((event: Events) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </section>
  );
}
