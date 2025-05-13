'use client'

import Link from 'next/link';
import Image from 'next/image'

export default function Footer () {


  return (
    <footer className="pt-4">
        <div className="flex flex-wrap items-baseline gap-4 justify-center md:justify-normal md:ml-32">
          {/* Move high res images to cdn */}
          <Image
            src="/images/UtahGrownLogo-Green@2x.png"
            alt="Utah Green Landscape"
            width={180}
            height={180}
            className="object-cover"
          />
          <p className="uppercase text-ug-green-two font-proximaNova">Utah&apos;s cannabis community</p>
        </div>
        <div className="bg-green-800 text-white mt-2">
          <div className=" max-w-7xl mx-auto h-22 flex flex-wrap justify-center md:justify-end md:mr-10 pt-4">
            <div className="flex space-x-6">
              <p className="text-sm">©2023 All Rights Reserved.</p>
              <Link
                href="/terms"
                className="text-sm hover:underline"
              >
                Terms and Conditions
              </Link>
              <Link
                href="/privacy"
                className="text-sm hover:underline"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
  )
}
