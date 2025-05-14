
import Image from "next/image";

export function AdContainerFull() {
  return (
    <div className="w-full my-8 flex justify-center items-center">
      <div 
        className="adsbygoogle-container w-full max-w-5xl"
        data-ad-format="horizontal"
        data-ad-slot="placeholder-slot-id"
      >
        {/* Placeholder image that will be replaced by actual ads */}
        <Image
          src="/images/MockBannerAd@2x.png"
          alt="Advertisement"
          width={1024}
          height={200}
          className="w-full h-auto"
          priority={false}
        />
      </div>
    </div>
  )
}
