import { Pharmacy } from "@models/index";

export async function getPharmacies(limit?: number): Promise<Pharmacy[]> {
  try {
    console.log(`Using real API service for ${limit ?? 'all'} pharmacies`);
    
    // For now, return an empty array
    // This will be replaced with real database queries later
    return [];
  } catch (error) {
    console.error('Error fetching pharmacies:', error);
    throw error;
  }
}
