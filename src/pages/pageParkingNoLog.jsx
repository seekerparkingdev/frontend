import React from "react";
import EventLocationMap from "../components/EventLocationMap";
import ParkingNoLog from "../components/ParkingNoLog";

const EventParkingPage = () => {
  return (
    <div className="mb-20 mt-10">
      <div className="mb-4 ml-48 mt-3">
        <h1 className="text-[#30364C] text-3xl font-urbanist">
          Estas reservando una plaza de estacionamiento para el evento
        </h1>
      </div>
      <div className="flex justify-center items-center p-4">
        <div className="max-w-9xl w-full bg-[#D4F7FF] p-10 rounded-3xl">
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="w-3/5">
              <EventLocationMap />
            </div>
            {/* Parking No Log (Right Side) */}
            <div className="w-2/5">
              <ParkingNoLog />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventParkingPage;