
import PharmaciesList from '@/components/PharmaciesList';
import { Pharmacy } from '@/models';
import { services } from '@/services';

async function fetchPharmacies(limit: number = 10): Promise<Pharmacy[]> {
  return services.pharmacyService.getPharmacies(limit);
}

export default async function HpPharmacies() {
  try {
    const pharmacies = await fetchPharmacies(10);
    
    return (
      <section className='mt-12' role="region" aria-label="Utah medical cards info" id="#pharmacies">
          <h2 className="text-3xl font-bold text-green-900 mb-8">Utah Medical Cannabis Pharmacies</h2>
          <PharmaciesList pharmacies={pharmacies} />
      </section>
    );
  } catch (error) {
    console.error("Error fetching pharmacies:", error);
    
    return (
      <section className='mt-12' role="region" aria-label="Utah medical cards info" id="#pharmacies">
          <h2 className="text-3xl font-bold text-green-900 mb-8">Utah Medical Cannabis Pharmacies</h2>
          <div className="text-center py-8">
            Unable to load pharmacy data. Please try again later.
          </div>
      </section>
    );
  }
}