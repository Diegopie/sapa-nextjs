import { Events } from "@models/index";

export async function getEvents(limit?: number): Promise<Events[]> {
  const events: Events[] = [
    {
      id: "1",
      date: "2025-05-17T09:00:00-06:00",
      location: "Downtown",
      city: "SLC",
      startTime: "2025-05-17T09:00:00-06:00",
      endTime: "2025-05-17T14:00:00-06:00",
      type: "New Patients and Renewals",
      site: "https://tidycal.com/diegopie/hire-diego"
    },
    {
      id: "2",
      date: "2025-05-23T09:00:00-06:00",
      location: "Price",
      city: "UT",
      startTime: "2025-05-23T09:00:00-06:00",
      endTime: "2025-05-23T16:00:00-06:00",
      type: "Renewals Only",
      site: "https://tidycal.com/diegopie/hire-diego"
    },
    {
      id: "3",
      date: "2025-06-05T10:00:00-06:00",
      location: "<Other Location>",
      city: "",
      startTime: "2025-06-05T10:00:00-06:00",
      endTime: "2025-06-05T14:00:00-06:00",
      type: "Special Event for Veterans",
      site: "https://tidycal.com/diegopie/hire-diego"
    },
    {
      id: "4",
      date: "2025-06-15T11:00:00-06:00",
      location: "Murray",
      city: "UT",
      startTime: "2025-06-15T11:00:00-06:00",
      endTime: "2025-06-15T17:00:00-06:00",
      type: "New Patients Only",
      site: "https://tidycal.com/diegopie/hire-diego"
    },
    {
      id: "5",
      date: "2025-07-02T10:00:00-06:00",
      location: "Sandy",
      city: "UT",
      startTime: "2025-07-02T10:00:00-06:00",
      endTime: "2025-07-02T15:00:00-06:00",
      type: "New Patients and Renewals",
      site: "https://tidycal.com/diegopie/hire-diego"
    },
    {
      id: "6",
      date: "2025-07-18T09:00:00-06:00",
      location: "Ogden",
      city: "UT",
      startTime: "2025-07-18T09:00:00-06:00",
      endTime: "2025-07-18T14:00:00-06:00",
      type: "Renewals Only",
      site: "https://tidycal.com/diegopie/hire-diego"
    }
  ];
  
  const now = new Date();
  
  // Only serve future events
  // We would index a pg db by date timestamp so that the ORM can just take care of sorting and events and limiting to the query
  const futureEvents = events
    .filter(event => new Date(event.startTime) > now)
    .sort((a, b) => new Date(a.startTime).getTime() - new Date(b.startTime).getTime());
  
  if (limit && limit > 0) {
    return futureEvents.slice(0, limit);
  }
  return futureEvents;
}
