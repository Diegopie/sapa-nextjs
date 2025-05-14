
import Image from 'next/image';

// Define the interface for the data structure
export interface TilePanelItem {
  img: string;
  title: string;
  text: string;
  side: 'left' | 'right';
}

export interface TilePanelsProps {
  panels?: TilePanelItem[];
}

export function TilePanels({ panels }: TilePanelsProps) {
  // Default data if none is provided
  const defaultPanels: TilePanelItem[] = [
    {
      img: '/images/Consultation@2x.png',
      title: 'Utah Medical Cards',
      text: 'A medical cannabis card, also known as a medical marijuana card, is a state-issued identification card that allows qualified patients to legally purchase and use medical cannabis for the treatment of specific medical conditions. In Utah, a card is required to access and purchase medical cannabis products from state-licensed dispensaries.',
      side: 'left'
    }
  ];

  const panelsToRender = panels || defaultPanels;

  return (
    <div className="w-full">
      {panelsToRender.map((panel, index) => (
        <div key={index} className="flex flex-col md:flex-row items-center justify-center my-8 gap-8">
          {/* Conditionally render image on left or content on left */}
          {panel.side === 'left' ? (
            <>
              <div className="w-full md:w-1/2 max-w-md">
                <Image
                  src={panel.img}
                  alt={panel.title}
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-lg shadow-md"
                  priority={index === 0}
                />
              </div>
              <div className="w-full md:w-1/2 max-w-xl">
                <h2 className="text-3xl font-bold text-ug-green-two mb-4">{panel.title}</h2>
                <p className="font-interstate text-ug-grey-two">{panel.text}</p>
              </div>
            </>
          ) : (
            <>
              <div className="w-full md:w-1/2 max-w-md md:order-2">
                <Image
                  src={panel.img}
                  alt={panel.title}
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-lg shadow-md"
                  priority={index === 0}
                />
              </div>
              <div className="w-full md:w-1/2 max-w-xl md:order-1">
                <h2 className="text-3xl font-bold text-ug-green-two mb-4">{panel.title}</h2>
                <p className="font-interstate text-ug-grey-two">{panel.text}</p>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}