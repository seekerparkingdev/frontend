import React from "react";
import EventLocationMap from "../components/EventLocationMap";
import ParkingNoLog from "../components/ParkingNoLog";

const EventParkingPage = () => {
  return (
    <div className="flex justify-center items-center p-4">
      <div className="max-w-9xl w-full bg-[#D4F7FF] p-10 rounded-3xl">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="w-full ">
            <EventLocationMap />
          </div>

          {/* Parking No Log (Right Side) */}
          <div className="w-full lg:w-1/2">
            <ParkingNoLog />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventParkingPage;
