import HpEvents from "./components/HpEvents";
import HpAppointmentList from "./components/HpAppointmentList";
import { AdContainerFull } from "@components/ui/AdContainer";
import { TilePanels } from "@components/ui/TilePanels";
import { ReviewBannerLg } from "@components/ui/ReviewBanner";
import Faq from "@components/layouts/Faq";
import HpPharmacies from "./components/HpPharmacies";
import HpAboutUs from "./components/HpAboutUs";

export default function Home() {
  return (
    <main className="flex-grow mt-2 px-10 md:px-32 max-w-5xl mx-auto 2xl:max-w-7xl">
      <div className="text-center pb-6">
        <h1 className="font-interstate font-light text-ug-green-two text-2xl">
          Utah&apos;s Cannabis Community
        </h1>
      </div>
      <HpEvents />
      <HpAppointmentList />
      <AdContainerFull />
      <section
        className="mt-12"
        role="region"
        aria-label="Utah medical cards info"
      >
        <TilePanels
          panels={[
            {
              img: "/images/Consultation.png",
              title: "Utah Medical Cards",
              text: "A medical cannabis card, also known as a medical marijuana card, is a state-issued identification card that allows qualified patients to legally purchase and use medical cannabis for the treatment of specific medical conditions. In Utah, a card is required to access and purchase medical cannabis products from state-licensed dispensaries. Having a medical card does not allow you to possess any cannabis product but only the products you purchased under your PAT (Medical Card ID number).",
              side: "left",
            },
          ]}
        />
      </section>
      <section role="region" aria-label="Customer reviews">
        <ReviewBannerLg />
      </section>
      <Faq />
      <HpPharmacies />
      <HpAboutUs />
    </main>
  );
}
