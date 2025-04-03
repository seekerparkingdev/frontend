import ParkingList from "../components/ParkingList";
import LocationMap from "../components/LocationMap";
 
const pageParkings = () => {
  return (
    <div className="flex flex-row w-full h-screen">
      {/* Panel izquierdo con lista de estacionamientos */}
      <div className="md:w-1/3 h-full">
        <ParkingList />
      </div>
      {/* Mapa a la derecha */}
      <div className="hidden md:block md:w-2/3 md:h-full">
        <LocationMap />
      </div>
    </div>
  );
};

export default pageParkings;
