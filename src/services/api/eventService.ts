import { Events } from "@models/index";

export async function getEvents(limit?: number): Promise<Events[]> {
  // For when we connect a pg db
  
  try {
    console.log(`Using real API service for ${limit ?? 'all'} events`);
    return [];
  } catch (error) {
    console.error('Error fetching events:', error);
    throw error;
  }
}
