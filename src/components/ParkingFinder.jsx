import React, { useState } from "react";
import { ChevronsUpDown} from "lucide-react";

const ParkingFinder = () => {
  const [sortBy, setSortBy] = useState("distance");
  
  const parkingSpots = [
    {
      id: 1,
      name: "Movistar Arena Parking Oficial",
      address: "Concepción Arenal 3878",
      city: "Buenos Aires",
      distance: "600 mts",
      price: 900,
      spotsLeft: 11,
      requiresKeys: true,
      includesTransport: true,
    },
    {
      id: 2,
      name: "Joy Cowork",
      address: "Av. Dorrego 850",
      city: "Buenos Aires",
      distance: "600 mts",
      price: 900,
      spotsLeft: 11,
      requiresKeys: true,
      includesTransport: true,
    },
    {
      id: 3,
      name: "Thames",
      address: "Thames 333",
      city: "Buenos Aires",
      distance: "750 mts",
      price: 850,
      spotsLeft: 8,
      requiresKeys: false,
      includesTransport: false,
    },
    {
      id: 4,
      name: "Movistar Arena Parking Oficial",
      address: "Concepción Arenal 3878",
      city: "Buenos Aires",
      distance: "600 mts",
      price: 900,
      spotsLeft: 11,
      requiresKeys: true,
      includesTransport: true,
    },
    {
      id: 5,
      name: "Joy Cowork",
      address: "Av. Dorrego 850",
      city: "Buenos Aires",
      distance: "600 mts",
      price: 900,
      spotsLeft: 11,
      requiresKeys: true,
      includesTransport: true,
    },
    {
      id: 6,
      name: "Thames",
      address: "Thames 333",
      city: "Buenos Aires",
      distance: "750 mts",
      price: 850,
      spotsLeft: 8,
      requiresKeys: false,
      includesTransport: false,
    },
  ];

  return (
    <div className="mx-auto bg-white rounded-lg md:shadow-md md:p-4 p-0  ">
      <h2 className="text-[26px] font-semibold text-[#30364C] mb-4 font-urbanist md:block hidden">
        13 estacionamientos disponibles
      </h2>

      <div className="flex justify-between items-center mb-4">
        <span className="text-[#293251] font-urbanist text-base font-semibold">
          Ordenar por
        </span>
        <div className="flex space-x-2 ml-auto">
          <button
            className="px-4 py-1 rounded-full flex items-center text-[#394A8F] text-[15px] bg-[#F6FDFF] shadow-[0px_1px_2px_0px_#0000004D] font-metropolis"
            onClick={() => setSortBy("price")}
          >
            Precio <ChevronsUpDown size={16} />
          </button>
          <button
            className="px-4 py-1 rounded-full flex items-center bg-[#61B4CE] shadow-[0px_1px_2px_0px_#0000004D] font-metropolis text-[15px] font-bold text-[#F6FDFF]"
            onClick={() => setSortBy("distance")}
          >
            Distancia <ChevronsUpDown size={16} />
          </button>
        </div>
      </div>

      {/* Container con altura fija y scroll personalizado */}
      <div className="md:h-96 overflow-y-auto custom-scrollbar ">
        <div className="border-t   border-[#4B6FC7] ">
          {parkingSpots.map((spot) => (
            <div
              key={spot.id}
              className="border-b   border-[#4B6FC7] pb-4 font-metropolis text-[#283B72] p-4"
            >
              <h3 className="md:text-[25px] text-[15px] font-semibold">{spot.name}</h3>
              <div className="flex items-center text-sm mb-1">
                <span className="md:text-[15px] text-[13px] font-semibold">
                  {spot.address}
                </span>
                <span className="mx-2 text-[#4B6FC7]">•</span>
                <span className="flex items-center text-[#4B6FC7] md:text-[15px] text-[13px] font-medium">
                  <img src="assets/distancia.png" alt="" className="mr-2" />
                  {spot.distance}
                </span>
              </div>
              <p className="md:text-sm text-xs font-medium mb-2">{spot.city}</p>

              <p className="text-[#394A8F] font-semibold md:text-base text-[15px] mb-2">
                Quedan sólo {spot.spotsLeft} lugares
              </p>

              {spot.requiresKeys && (
                <div className="flex items-center mb-2 text-xs font-semibold text-[#394A8F]">
                  <img className="mr-2" src="assets/keys.png" alt="" />
                  Este estacionamiento requiere dejar las llaves
                </div>
              )}

            

              <div className="flex w-full mt-2">
                <button className="bg-[#4B6FC7] text-[#F6FDFF] rounded-l-3xl py-3 px-4 flex-1 md:text-base text-[15px] font-semibold">
                  Estacioná desde
                </button>
                <div className="bg-[#D4F7FF] text-[#4B6FC7] font-semibold rounded-r-3xl py-3 px-4 flex-1 text-center text-[15px] md:text-base">
                  $ {spot.price}
                </div>
                
              </div>


              {spot.includesTransport && (
                <div className="bg-black text-[#F6FDFF] text-xs px-3 py-1 rounded-full md:inline-block  mt-3 flex items-center">
                  <span className="mr-1 font-bold">Uber</span>
                  Incluye el traslado directo al lugar del evento
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      
      {/* Estilos CSS para la barra de desplazamiento personalizada */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #F6FDFF;
          border-radius: 4px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #4B6FC7;
          border-radius: 4px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #394A8F;
        }
      `}</style>
    </div>
  );
};

export default ParkingFinder;