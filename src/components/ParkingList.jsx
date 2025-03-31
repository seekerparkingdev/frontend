import ParkingHeader from "./ParkingHeader";
import ParkingFinder from "./ParkingFinder";
const ParkingList = () => {
  return (
    <div className="w-full p-4 bg-white h-full overflow-auto">
      <ParkingHeader />
      <ParkingFinder />
    </div>
  );
};

export default ParkingList;
