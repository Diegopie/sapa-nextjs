import { Pharmacy } from '@/models';

interface PharmaciesListProps {
  pharmacies: Pharmacy[];
  limit?: number;
}

export default function PharmaciesList({ pharmacies }: PharmaciesListProps) {
  return (
    <div className="grid grid-cols-1 gap-6">
      {pharmacies.map((pharmacy) => (
        <div key={pharmacy.id} className="px-18 md:px-0 mt-2 w-full">
          <h3 className="font-bold text-ug-green-two">{pharmacy.title}</h3>            <div className="mt-2">            {/* Locations */}
                {pharmacy.locations.map((location, index) => (              <div key={index} className="flex flex-col md:flex-row justify-between mb-3 text-sm">
                <div className="md:w-1/3 mb-2 md:mb-0">                  <a 
                    href={`https://maps.google.com/?q=${encodeURIComponent(location.address)}`}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-green-700 hover:underline focus:text-green-700 focus:underline"
                  >
                    {location.address}
                  </a>
                </div>                <div className="md:w-1/3 text-left md:text-center mb-2 md:mb-0">
                  <a 
                    className="text-gray-600 hover:underline focus:underline hover:text-green-700 focus:text-green-700" 
                    href={`tel:1${location.phone}`}
                  >
                    {location.phone}
                  </a>
                </div>
                <div className="md:w-1/3 text-left md:text-right">
                  {location.website && (                    <a 
                      href={`https://${location.website}`}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-green-700 hover:underline focus:underline"
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
