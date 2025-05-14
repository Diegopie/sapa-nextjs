import Image from "next/image";

export function ReviewBannerLg() {
  return (
    <div className="relative m-auto my-12 max-w-5xl text-white p-8 rounded-lg overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/ReviewBanner@2x.png"
          alt="Review banner background"
          fill
          priority
          className="object-cover rounded-lg"
        />
      </div>
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between">
        <div className="mb-6 md:mb-0">
          <h2 className="text-3xl font-proximaNova mb-6">
            We&apos;d love to hear from you!
          </h2>
          <a
            href="#review-form"
            className="bg-orange-200 text-gray-800 text-2xl px-6 py-2 rounded-full font-interstate hover:bg-orange-300 transition-colors text-center"
            aria-label="Leave a review"
          >
            Review us here!
          </a>
        </div>
      </div>
    </div>
  );
}
