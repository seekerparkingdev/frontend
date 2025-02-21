import React from "react";

const MovistarBanner = () => {
  return (
    <div className="w-full max-w-9x1 mx-auto px-16 mt-3">
      <div className="relative w-full h-96 overflow-hidden rounded-3xl shadow-lg">
        {/* Imagen del banner  */}
        <div
          className="absolute inset-0 bg-[url('/assets/banner.png')] bg-cover bg-center"
          style={{
            backgroundBlendMode: "multiply",
          }}
        ></div>

        {/* Movistar Logo */}
        <div className="absolute top-6 left-10">
          <div className="flex items-center">
            <img
              src="/assets/movistar-arena.png"
              alt="Movistar Arena Logo"
              className="h-20 w-100"
            />
          </div>
        </div>

        {/* Contenido Container */}
        <div className="relative h-full flex flex-col justify-between p-6">
          {/* Main Text */}
          <div className="mt-20 ml-9">
            <h1 className="text-white text-4xl font-bold max-w-xl">
              Reservá estacionamiento y
              <br />
              disfrutá más de la experiencia.
            </h1>
          </div>

          {/* Bottom seleccion y direccion */}
          <div className="flex items-center justify-between mt-auto">
            {/* Location */}
            <div className="flex items-center text-white">
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="font-urbanist  text-[#FFFFFF] text-xl">
                Humboldt 450, Ciudad de Buenos Aires
              </span>
            </div>

            {/* Buttons */}
            <div className="flex gap-4">
              <button className="px-6 py-2 bg-[#4B6FC7] text-white rounded-full border border-[#FFFFFF] ">
                Como llegar
              </button>
              <button className="px-6 py-2 bg-[#4B6FC7] text-white rounded-full border border-[#FFFFFF] ">
                Sitio oficial
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovistarBanner;
