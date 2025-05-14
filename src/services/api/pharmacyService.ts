import { Pharmacy } from "@models/index";

export async function getPharmacies(limit?: number): Promise<Pharmacy[]> {
  // For when we connect a pg db
  
  try {
    console.log(`Using real API service for ${limit ?? 'all'} pharmacies`);
    return [];
  } catch (error) {
    console.error('Error fetching pharmacies:', error);
    throw error;
  }
}
