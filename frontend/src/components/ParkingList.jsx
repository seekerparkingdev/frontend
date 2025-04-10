import ParkingHeader from "./ParkingHeader";
import ParkingFinder from "./ParkingFinder";
import LocationMapMobil from "./LocationMapMobil";
const ParkingList = () => {
  return (
    <div className="w-full p-4 bg-white h-full overflow-auto">
      <ParkingHeader />
      <LocationMapMobil/>
      <ParkingFinder />
    </div>
  );
};

export default ParkingList;
