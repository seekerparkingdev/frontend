import React from "react";
import EventLocationMap from "../components/EventLocationMap";
import ParkingNoLog from "../components/ParkingNoLog";
import LoginRegistrationButtons from "../components/LoginRegistrationButtons";

const EventParkingPage = () => {
  return (
    <div className="mb-20 mt-10">
      <div className="mb-4 ml-48 mt-3 md:block hidden">
        <h1 className="text-[#30364C] text-3xl font-urbanist  ">
          Estas reservando una plaza de estacionamiento para el evento
        </h1>
      </div>
      <div className="md:flex justify-center items-center  ">
        <div className="md:max-w-9xl w-full  bg-[#D4F7FF] md:p-10   rounded-3xl ">
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="md:w-3/5 w-full">
              <EventLocationMap />
            </div>
            {/* Parking No Log (Right Side) */}
            <div className="w-2/5">
              <ParkingNoLog />
            </div>
          </div>
          <div className="flex justify-center items-center py-2  ">
            <span className="md:hidden block text-[15px] font-normal font-metropolis text-[#30364C]">
              Para finalizar con la reserva es necesario
            </span>
          </div>
        </div>
        <LoginRegistrationButtons />
      </div>
    </div>
  );
};

export default EventParkingPage;
