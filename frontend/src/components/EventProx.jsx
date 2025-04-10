import React from "react";

const EventProx = () => {
  const events = [
    {
      id: 1,
      name: "Sahar.r",
      date: "21 Diciembre 2023",
      location: "Palacio Alsina",
      image: "assets/event1.png",
    },
    {
      id: 2,
      name: "Sahar.r",
      date: "21 Diciembre 2023",
      location: "Palacio Alsina",
      image: "assets/event2.png",
    },
    {
      id: 3,
      name: "Sahar.r",
      date: "21 Diciembre 2023",
      location: "Palacio Alsina",
      image: "assets/event3.png",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-[#30364C] md:text-4xl text-2xl font-bold font-urbanist mb-6">
        Próximos eventos
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-white rounded-2xl border-2 border-t-0 overflow-hidden shadow-2xl flex flex-row md:flex-col h-full"
          >
            {/* Card Imagen */}
            <div className="relative w-1/3 h-full md:h-48 md:w-full overflow-hidden">
              <img
                src={event.image}
                alt={event.name}
                className="w-full h-full object-cover md:rounded-3xl"
              />
            </div>

            <div className="p-2 md:p-4  md:space-y-4  flex flex-row md:flex-col justify-between w-2/3 md:w-full">
              <div className="space-y-1">
                <h2 className="text-lg md:text-4xl font-semibold font-urbanist text-[#30364C]">
                  {event.name}
                </h2>
                <p className="text-[#30364C] font-metropolis md:text-xl text-xs">
                  {event.location}
                </p>
                <p className="text-[#30364C] font-metropolis text-xs">
                  {event.date}
                </p>
              </div>

              {/* Botón Compra */}
              <div className="flex justify-end mt-auto">
                <button className="md:w-full px-4 py-2 font-semibold sm:w-auto bg-[#D5FF99] text-[#30364C] sm:bg-[#4B6FC7]
                 sm:text-white  md:py-1.5 md:px-3 rounded-full font-metropolis   text-xs md:text-xs shadow-xl">
                  
                  {/* En dispositivos pequeños el texto y el color cambian */}
                  <span className="block sm:hidden">Reservar</span>
                  <span className="hidden sm:block">
                    Comprá tu estacionamiento
                  </span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventProx;
