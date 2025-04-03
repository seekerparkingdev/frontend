import React from "react";
import { ArrowLeft } from "lucide-react";
const ParkingHeader = () => {
  return (
    <div className="mb-4 bg-white md:p-4 p-0">
      {/* Título principal */}
      <button className="flex items-center  space-x-2 p-2 md:hidden">
        <ArrowLeft className="w-7 h-7" />
        <span className="text-lg font-metropolis font-bold">Volver</span>
      </button>
      <h1 className="text-2xl font-urbanist font-bold text-[#30364C] md:text-[#394A8F] mb-3">
        Estás buscando estacionamiento para
      </h1>

      {/* Información del evento */}
      <div className="border-solid border border-[#9599AA66] rounded-xl  p-3  relative">
        <div className="flex flex-col sm:flex-row items-start relative">
          {/* Imagen del evento */}
          <div className="w-32   h-28   bg-[#F6FDFF] rounded-lg overflow-hidden mb-3 sm:mb-0 sm:mr-3">
            <img
              src="assets/event2.png"
              alt="Evento"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Hora arriba a la derecha a la misma altura de la imagen */}
          <div className="absolute top-0 right-0 bg-[#C1FF71] text-[#293251] px-9 py-2 rounded-full text-[15px] font-semibold md:hidden">
            19.30 hs
          </div>

          {/* Información del evento */}
          <div className="flex-1">
            {/* Título */}
            <div className="mb-1">
              <h2
                className="font-bold font-urbanist text-[#30364C] text-[25px] sm:text-[22px] pr-2 whitespace-nowrap overflow-hidden"
                style={{
                  maskImage:
                    "linear-gradient(to right, rgba(0,0,0,1) 70%, rgba(0,0,0,0))",
                  WebkitMaskImage:
                    "linear-gradient(to right, rgba(0,0,0,1) 70%, rgba(0,0,0,0))",
                }}
              >
                El mató un policía motorizado
              </h2>
            </div>

            {/* Ubicación */}
            <p className="text-[#30364C] text-base sm:text-lg font-metropolis font-medium">
              Movistar Arena
            </p>
          </div>
        </div>

        {/* Fecha del evento - abajo a la derecha */}
        <div className="text-[#30364C] text-base sm:text-lg font-metropolis font-semibold absolute bottom-2 right-2">
          25/12/23
        </div>
      </div>

      {/* Fechas y horarios de reserva */}
      <div className="hidden mt-10 bg-[#F6FDFF] rounded-lg p-3 md:flex items-center shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
        <div className="text-[26px] font-urbanist text-[#30364C]">
          <div className="font-medium flex items-center">
            <img
              src="assets/calender.png"
              alt="Calendario"
              className="mr-2 w-6 h-6"
            />
            <span>Desde </span>
            <span className="font-bold mx-2">23/12/23</span>
            <span>a las </span>
            <span className="font-bold mx-2">19:30</span>
          </div>
          <div className="font-medium ml-8">
            <span>Hasta </span>
            <span className="font-bold mx-2">24/12/23</span>
            <span>a las </span>
            <span className="font-bold mx-2">00:30</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParkingHeader;
