import React, { useEffect, useRef } from "react";

const EventNewSecundario = () => {
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
    {
      id: 4,
      name: "Sahar.r",
      date: "21 Diciembre 2023",
      location: "Palacio Alsina",
      image: "assets/event1.png",
    },
    {
      id: 5,
      name: "Sahar.r",
      date: "21 Diciembre 2023",
      location: "Palacio Alsina",
      image: "assets/event2.png",
    },
    {
      id: 6,
      name: "Sahar.r",
      date: "21 Diciembre 2023",
      location: "Palacio Alsina",
      image: "assets/event3.png",
    },
  ];

  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.scrollLeft += 300;
        if (
          sliderRef.current.scrollLeft >=
          sliderRef.current.scrollWidth - sliderRef.current.clientWidth
        ) {
          sliderRef.current.scrollLeft = 0;
        }
      }
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-[1800px] mx-auto px-4 py-4">
      <h1 className="text-[#30364C] md:text-4xl text-2xl font-bold font-urbanist mb-6">
        Nuevos eventos
      </h1>
      <div className="overflow-hidden relative bg-[#D4F7FF]   py-8   rounded-2xl">
        <div
          ref={sliderRef}
          className="flex gap-4 overflow-x-auto scroll-smooth no-scrollbar ml-[40px]"
        >
          {events.map((event) => (
            <div
              key={event.id}
              className="min-w-[40%] md:min-w-[30%] lg:min-w-[25%] flex-shrink-0"
            >
              <div className="bg-white rounded-3xl border-2 border-t-0 overflow-hidden  shadow-sm flex flex-col h-full">
                <div className="relative h-52 w-full overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.name}
                    className="w-full h-full object-cover md:rounded-b-3xl"
                  />
                </div>
                <div className="p-4 space-y-2">
                  <div className="mb-7 space-y-1">
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
                  <button className="w-full px-4 py-2  font-semibold bg-[#D5FF99] text-[#30364C] sm:bg-[#4B6FC7] sm:text-white rounded-full font-metropolis text-xs md:text-sm shadow-xl">
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
    </div>
  );
};

export default EventNewSecundario;
