import React, { useEffect, useRef, useState } from "react";

const EventNewSecundario = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Verificar al cargar
    checkIfMobile();

    // Verificar al cambiar el tamaño de la ventana
    window.addEventListener("resize", checkIfMobile);

    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  const events = [
    {
      id: 1,
      name: "Sahar.r",
      date: "21 Diciembre 2023",
      location: "Palacio Alsina",
      image: "assets/event3.png",
      mobileDate: "25/07/24",
      mobileName: "La esencia de J Qui",
      mobileLocation: "Movistar Arena",
    },
    {
      id: 2,
      name: "Sahar.r",
      date: "21 Diciembre 2023",
      location: "Palacio Alsina",
      image: "assets/event3.png",
      mobileDate: "25/07/24",
      mobileName: "Ciro y los Persas",
      mobileLocation: "Movistar Arena",
    },
    {
      id: 3,
      name: "Sahar.r",
      date: "21 Diciembre 2023",
      location: "Palacio Alsina",
      image: "assets/event3.png",
      mobileDate: "25/07/24",
      mobileName: "Evento 3",
      mobileLocation: "Movistar Arena",
    },
    {
      id: 4,
      name: "Sahar.r",
      date: "21 Diciembre 2023",
      location: "Palacio Alsina",
      image: "assets/event3.png",
      mobileDate: "25/07/24",
      mobileName: "Evento 4",
      mobileLocation: "Movistar Arena",
    },
    {
      id: 5,
      name: "Sahar.r",
      date: "21 Diciembre 2023",
      location: "Palacio Alsina",
      image: "assets/event3.png",
      mobileDate: "25/07/24",
      mobileName: "Evento 5",
      mobileLocation: "Movistar Arena",
    },
    {
      id: 6,
      name: "Sahar.r",
      date: "21 Diciembre 2023",
      location: "Palacio Alsina",
      image: "assets/event3.png",
      mobileDate: "25/07/24",
      mobileName: "Evento 6",
      mobileLocation: "Movistar Arena",
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

  // Renderizado para móvil
  if (isMobile) {
    return (
      <div className="px-4 py-4 mt-4">
        <h1 className="text-3xl font-bold mb-4 text-[#30364C] font-urbanist">
          Nuevos eventos
        </h1>
        <div className="flex overflow-x-auto bg-[#D4F7FF]   px-5 py-16 gap-4 no-scrollbar  rounded-xl ">
          {events.map((event) => (
            <div
              key={event.id}
              className="min-w-[180px] w-56 flex-shrink-0 bg-white  rounded-2xl   overflow-hidden flex flex-col  "
            >
              <div className="relative flex-grow   ">
                <img
                  src={event.image}
                  alt={event.mobileName}
                  className="w-full h-52 object-cover  rounded-b-[29px]"
                />
                <div className="absolute top-3 right-3  bg-[#C1FF71] text-black text-xs font-bold px-4 py-2 rounded-2xl font-metropolis">
                  {event.mobileDate}
                </div>
              </div>
              <div className="p-3 mt-1">
                <h2 className="text-sm font-bold text-[#30364C] line-clamp-2  font-urbanist">
                  {event.mobileName}
                </h2>
                <p className="font-metropolis text-xs mt-1 text-[#30364C]  ">
                  {event.mobileLocation}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Renderizado para desktop -
  return (
    <div className="max-w-[1800px] mx-auto px-4 py-4 mt-4">
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
              className="min-w-[20%]   md:min-w-[30%] lg:min-w-[25%] flex-shrink-0"
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
