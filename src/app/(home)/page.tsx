import Image from "next/image";
import Link from "next/link";

import Navigation from "@/components/layouts/Navigation";
import Footer from "@/components/layouts/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <Navigation />

      {/* Main Content Area */}
      <main className="flex-grow bg-white p-6 sm:p-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-green-50 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-interstate font-semibold text-green-800 mb-4">
                Medical Card Information
              </h3>
              <p className="text-gray-700 mb-4">
                Learn about the requirements for obtaining a medical cannabis
                card in Utah and how to apply.
              </p>
              <Link
                href="/medical-card-info"
                className="inline-block bg-green-700 text-white px-4 py-2 rounded-md hover:bg-green-800 transition-colors font-interstate"
              >
                Learn More
              </Link>
            </div>

            {/* Card 2 */}
            <div className="bg-green-50 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-interstate font-semibold text-green-800 mb-4">
                Schedule an Appointment
              </h3>
              <p className="text-gray-700 mb-4">
                Book a consultation with our qualified medical providers to
                discuss your treatment options.
              </p>
              <Link
                href="/appointments"
                className="inline-block bg-green-700 text-white px-4 py-2 rounded-md hover:bg-green-800 transition-colors font-interstate"
              >
                Book Now
              </Link>
            </div>

            {/* Card 3 */}
            <div className="bg-green-50 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-interstate font-semibold text-green-800 mb-4">
                Pharmacy Locations
              </h3>
              <p className="text-gray-700 mb-4">
                Find licensed medical cannabis pharmacies throughout Utah and
                browse their available products.
              </p>
              <Link
                href="/pharmacies"
                className="inline-block bg-green-700 text-white px-4 py-2 rounded-md hover:bg-green-800 transition-colors font-interstate"
              >
                Find Pharmacy
              </Link>
            </div>
          </div>

          <div className="mt-12 text-center">
            <h2 className="text-2xl md:text-3xl font-proximaNova font-medium text-green-900 mb-4">
              Your Guide to Medical Cannabis in Utah
            </h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Utah Grown is dedicated to providing resources, information, and
              support for Utah&apos;s growing medical cannabis community.
              Whether you&apos;re a patient, caregiver, or medical provider,
              we&apos;re here to help.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
