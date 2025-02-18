//Componentes
import ParkingReservation from "../components/ParkingReservation";
import ClientReview from "../components/ClienteReview";
import EventProx from "../components/EventProx";
import ParkingApp from "../components/ParkingApp";
import ParkingServiceSection from "../components/ParkingServiceSection";
import Partners from "../components/Partners";
import EventHighlighter from "../components/EventHighlighter";

const pageHome = () => {
  return (
    <>
      <EventHighlighter />
      <ParkingReservation />
      <EventProx />
      <Partners />
      <ParkingServiceSection />
      <ClientReview />
      <ParkingApp />
    </>
  );
};

export default pageHome;
