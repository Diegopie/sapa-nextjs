import React from "react";
import Image from "next/image";

export default function HpAppointmentList() {
  return (
    <section role="region" aria-labelledby="appointment-header" id="#medical-card-info">
      <h2
        id="appointment-header"
        className="text-primary text-3xl font-bold mb-8 text-center"
      >
        Things to know before your appointment
      </h2>

      <ol className="list-none p-0 m-0">
        {/* Step 1: Registration */}
        <li className="mb-10 flex gap-10" aria-labelledby="listItem-01">
          <div className="bg-ug-green-two text-white w-12 h-12 md:w-20 md:h-20 rounded-full flex items-center justify-center text-xl md:text-2xl font-bold">
            1.
          </div>
          <div className="w-3/5 md:w-4/5 w-">
            <h3
              id="listItem-01"
              className="text-xl font-bold text-primary mb-4"
            >
              You&apos;re going to register with the state of Utah. You can
              start this before you arrive.
            </h3>

            <div className="mb-4 flex flex-col gap-4">
              <div className="flex flex-wrap items-center gap-4">
                <div className="bg-[#f2d3b7] px-6 py-2 rounded-lg text-center min-w-[150px]">
                  UtahID.org
                </div>
                <p>Obtain access to your Utah Digital ID</p>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <div className="bg-[#f2d3b7] px-6 py-2 rounded-lg text-center min-w-[150px]">
                  EVS.Utah.gov
                </div>
                <p>
                  Fill out all the fields until you get to &quot;Awaiting
                  Certification&quot; status
                </p>
              </div>
            </div>
            <div className="w-full flex justify-center">
              <Image
                src="/images/AwaitingCert-Image@2x.png"
                alt="Awaiting Certification status"
                width={176}
                height={176}
                className="w-44"
              />
            </div>
          </div>
        </li>
        {/* Step 2: QMP Check-in */}
        <li className="mb-10 flex gap-10" aria-labelledby="listItem-02">
          <div className="bg-ug-green-two text-white w-12 h-12 md:w-20 md:h-20 rounded-full flex items-center justify-center text-xl md:text-2xl font-bold">
            2.
          </div>
          <div className="w-3/5 md:w-4/5">
            <h3
              id="listItem-02"
              className="text-xl font-bold text-primary mb-4"
            >
              Check in with your QMP
            </h3>

            <ol className="list-none pl-0">
              <li className="mb-2">1. QMP Registration</li>
              <li className="mb-2">2. Medical Evaluation/Consultation</li>
              <li className="mb-2">3. Payment</li>
            </ol>
          </div>
        </li>

        {/* Step 3: Renewal or New Patient */}
        <li className="mb-10 flex gap-10" aria-labelledby="listItem-03">
          <div className="bg-ug-green-two text-white w-12 h-12 md:w-20 md:h-20 rounded-full flex items-center justify-center text-xl md:text-2xl font-bold">
            3.
          </div>
          <div className="w-3/5 md:w-4/5">
            <h3
              id="listItem-03"
              className="text-xl font-bold text-primary mb-4"
            >
              Renewal or New Patient?
            </h3>

            <div className="mb-4">
              <p>
                If this is a renewal, congratulations you are ready to shop...
              </p>
            </div>

            <div className="mb-4">
              <p>
                If you are a new patient, here are some helps to get you
                started...
              </p>
            </div>
            <div className="w-full flex justify-center">
              <ol className="list-none pl-0 mb-4">
                <li className="mb-2">1. Meet with Pharmacist</li>
                <li className="mb-2">2. Set up your Portal Account</li>
                <li className="mb-2">3. Start Shopping</li>
                <li className="font-bold">
                  **Don&apos;t forget to take advantage of new patient deals**
                </li>
              </ol>
            </div>
          </div>
        </li>
      </ol>
    </section>
  );
}
