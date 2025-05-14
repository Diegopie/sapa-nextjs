import HpEvents from "./components/HpEvents";
import HpAppointmentList from "./components/HpAppointmentList";

export default function Home() {
  return (
    <main className="flex-grow bg-white sm:p-12 p-6 md:px-32">
      <HpEvents />
      <HpAppointmentList />
    </main>
  );
}
