import Image from "next/image";

export default function HpAboutUs() {
  return (
    <section className="mt-18 relative" role="region" aria-label="Normalize It Utah">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-proximaNova font-bold text-ug-green-two mb-4">
            About Utah Grown
          </h2>
          <p className="font-interstate text-black smd:text-ug-grey-two">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullam corper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate
            velit esse molestie consequat, vel illum dolore.
          </p>
          <h3 className="text-3xl font-proximaNova font-bold text-ug-green-two mb-4 mt-20">
            Utah Grown Office
          </h3>
          <a
          className="font-interstate text-black smd:text-ug-grey-two text-xl"
            aria-label="Utah grown on google maps"
            href="https://www.google.com/maps/place/Utah+Grown/@40.7533586,-111.8911626,17z/data=!3m1!4b1!4m6!3m5!1s0x8752f5db51b53a3f:0xd096267f94d4b645!8m2!3d40.7533586!4d-111.8885877!16s%2Fg%2F11l6vp011c?entry=ttu&g_ep=EgoyMDI1MDUxMi4wIKXMDSoASAFQAw%3D%3D"
          >
            730 State Street <br/> Salt Lake City, Utah 84111
          </a>
        </div>
        <div className="w-full hidden smd:block md:w-2/3">
          
        </div>
      </div>
      <Image
            src="/images/NormalizeItUtah@2x.png"
            alt="Normalize It Utah"
            width={480}
            height={380}
            priority
            className="absolute -right-12 -bottom-24 smd:-right-24 smd:-bottom-36 -z-10 opacity-40 md:opacity-100"
          />
    </section>
  );
}
