import React from "react";

const MovistarBanner = () => {
  return (
    <div className="w-full max-w-9x1 mx-auto  md:px-16 mt-3">
      <div className="relative w-full h-70 md:h-96 overflow-hidden md:rounded-3xl shadow-lg md:text-left text-center md:text-">
        {/* Imagen del banner */}
        <div
          className="absolute inset-0 bg-[url('/assets/banner.png')] bg-cover bg-center   "
          style={{
            backgroundBlendMode: "multiply",
          }}
        ></div>

        {/* Movistar Logo */}
        <div className="w-full  absolute top-6 left-1/2 -translate-x-1/2 md:left-10 md:translate-x-0 ">
          <div className="flex">
            <img
              src="/assets/movistar-arena.png"
              alt="Movistar Arena Logo"
              className="h-30  md:h-20 md:w-auto w-full"
            />
          </div>
        </div>

        {/* Contenido Container */}
        <div className="relative md:h-full h-64 flex flex-col justify-between p-4 md:p-6">
          {/* Main Text */}
          <div className="mt-20 ml-2 md:ml-9">
            <h1 className="text-white text-base md:text-4xl font-bold max-w-xl">
              Reservá estacionamiento y
              <br />
              disfrutá más de la experiencia.
            </h1>
          </div>

          {/* Bottom seleccion y direccion */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mt-auto gap-6 md:gap-0">
            {/* Location */}
            <div className="flex items-center text-white">
              <svg
                className="w-5 h-5 mr-2 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="font-urbanist text-[#FFFFFF] text-lg md:text-xl">
                Humboldt 450, Ciudad de Buenos Aires
              </span>
            </div>

            {/* Buttons */}
            <div className=" flex-col md:flex-row gap-4 w-full md:w-auto hidden md:flex">
              <button className="w-full md:w-auto px-6 py-2 bg-[#4B6FC7] text-white rounded-full border border-[#FFFFFF]">
                Como llegar
              </button>
              <button className="w-full md:w-auto px-6 py-2 bg-[#4B6FC7] text-white rounded-full border border-[#FFFFFF]">
                Sitio oficial
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-1 w-full md:hidden mt-2 font-metropolis text-xl">
        <button className="w-1/2 py-4 md:w-auto bg-[#4B6FC7] text-white rounded-full  ">
          Como llegar
        </button>
        <button className="w-1/2 md:w-auto bg-[#4B6FC7] text-white rounded-full  ">
          Sitio oficial
        </button>
      </div>
    </div>
  );
};

export default MovistarBanner;
