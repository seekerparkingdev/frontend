import React from "react";

const ParkingApp = () => {
  return (
    <div className="bg-white py-16 px-8">
      <div className="container mx-auto relative">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Ilustración */}
          <div className="flex-1 relative mb-8 md:mb-0">
            {/* Título oculto en pantallas pequeñas */}
            <h1 className="text-[32px] leading-tight font-semibold font-urbanist text-[#30364C] mb-24 hidden md:block">
              Un nuevo concepto de
              <br /> estacionamiento en la ciudad
            </h1>
            {/* Ilustración principal */}
            <div className="relative">
              <img
                src="assets/powered_by_seeker.png"
                alt="Ilustración de estacionamiento"
                className="w-full max-w-4xl h-full max-h-[600px]"
              />
            </div>
          </div>

          {/* Texto y Descarga */}
          <div className="w-full md:w-5/12 flex justify-center">
            {/* App Store Badges */}
            <div className="space-y-3">
              <p className="text-[#30364C] font-urbanist font-semibold text-3xl mb-4">
                Descargá la app
              </p>
              <a href="#" className="block w-[200px]">
                <img
                  src="assets/google-play-badge.png"
                  alt="Descargar en Google Play"
                  className="w-full mt-5"
                />
              </a>
              <a href="#" className="block w-[200px]">
                <img
                  src="assets/app-store-badge.png"
                  alt="Descargar en App Store"
                  className="w-full mt-5"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParkingApp;
