import { Pharmacy } from '@/models';

interface PharmaciesListProps {
  pharmacies: Pharmacy[];
  limit?: number;
}

export default function PharmaciesList({ pharmacies }: PharmaciesListProps) {
  return (
    <div className="grid grid-cols-1 gap-6">
      {pharmacies.map((pharmacy) => (
        <div key={pharmacy.id} className="pharmacy-card mt-2 w-full">
          <h3 className="font-bold text-ug-green-two">{pharmacy.title}</h3>            <div className="mt-2">
            {/* Locations */}
            {pharmacy.locations.map((location, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-3 text-sm">
                <div className="col-span-1">
                  <p className="text-gray-700">{location.address}</p>
                </div>
                <div className="col-span-1 text-center">
                  <a className="text-gray-600" href={`tel:1${location.phone}`}>{location.phone}</a>
                </div>
                <div className="col-span-1 text-right">
                  {location.website && (
                    <a 
                      href={`https://${location.website}`}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-green-700 hover:underline"
                    >
                      {location.website}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
          {/* Tags */}
            {pharmacy.tags.length > 0 && (
            <div className="mt-4">
              {pharmacy.tags.map((tag, index) => (
                <span 
                  key={index} 
                  className="bg-orange-200 text-gray-800 text-sm px-6 py-2 rounded-lg  hover:bg-orange-300 transition-colors text-center"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
