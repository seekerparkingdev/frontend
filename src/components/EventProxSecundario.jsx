import React, { useState } from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";

const EventProxSecundario = () => {
  const [showAll, setShowAll] = useState(false);

  const events = [
    {
      id: 1,
      artist: "Morrissey",
      venue: "Movistar Arena",
      date: "21 Diciembre 2023",
      image: "assets/event1.png",
      cancelled: true,
    },
    {
      id: 2,
      artist: "David Bisbal",
      venue: "Movistar Arena",
      date: "21 Diciembre 2023",
      image: "assets/event2.png",
    },
    {
      id: 3,
      artist: "Slash",
      venue: "Movistar Arena",
      date: "21 Diciembre 2023",
      image: "assets/event3.png",
    },
    {
      id: 4,
      artist: "Morrissey",
      venue: "Movistar Arena",
      date: "21 Diciembre 2023",
      image: "assets/event1.png",
    },
    {
      id: 5,
      artist: "David Bisbal",
      venue: "Movistar Arena",
      date: "21 Diciembre 2023",
      image: "assets/event2.png",
    },
    {
      id: 6,
      artist: "Slash",
      venue: "Movistar Arena",
      date: "21 Diciembre 2023",
      image: "assets/event3.png",
      cancelled: true,
    },
  ];

  const displayedEvents = showAll ? events : events.slice(0, 3);

  return (
    <div className="p-6 max-w-[1800px] mx-auto mb-4">
      <h1 className="text-[40px] font-semibold mb-8 text-[#30364C]">
        Próximos eventos
      </h1>

      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto justify-items-center"
        style={{
          transition: "height 0.s ease", // 
        }}
      >
        {displayedEvents.map((event) => (
          <div
            key={event.id}
            className="bg-white rounded-3xl w-full shadow-md overflow-hidden"
          >
            <div className="relative">
              <img
                src={event.image}
                alt={event.artist}
                className="w-full h-48 object-cover rounded-b-3xl"
              />
              {event.cancelled && (
                <div className="absolute bottom-0 left-0 right-0 bg-red-400 text-white text-center py-1 font-bold">
                  CANCELADO
                </div>
              )}
            </div>
            <div className="p-4">
              <h2 className="text-4xl font-bold text-[#30364C] mb-1">
                {event.artist}
              </h2>
              <p className="text-[#30364C] text-xl mb-1">{event.venue}</p>
              <p className="text-[#30364C] text-sm mb-4">{event.date}</p>
              <button
                className={`w-full py-2 mt-5 px-4 text-xl rounded-3xl text-center ${
                  event.cancelled
                    ? "bg-[#D2D8D9] text-white cursor-not-allowed"
                    : "bg-[#4B6FC7] text-white"
                }`}
                disabled={event.cancelled}
              >
                Comprá tu estacionamiento
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <button
          onClick={() => setShowAll(!showAll)}
          className={`bg-[#4B6FC7] ${
            showAll ? "text-white" : "text-[#D4F7FF]"
          } py-2 px-12 rounded-3xl text-2xl mt-2`}
        >
          {showAll ? <FaArrowAltCircleUp /> : "Más eventos"}
        </button>
      </div>
    </div>
  );
};

export default EventProxSecundario;
