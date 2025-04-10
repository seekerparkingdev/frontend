import React, { useEffect, useRef, useState } from "react";

const EventHighlighter = () => {
  const scrollRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const data = [
    {
      name: "Purple Disco Machine",
      venue: "Madero Broad Walk",
      image: "assets/event1.png",
      date: "25/07/23",
    },
    {
      name: "Sahar.z",
      venue: "Palacio Alsina",
      image: "assets/event2.png",
      date: "25/07/23",
    },
    {
      name: "Richie Hawtin",
      venue: "Palacio Alsina",
      image: "assets/event3.png",
      date: "25/07/23",
    },
    {
      name: "Purple Disco Machine",
      venue: "Madero Broad Walk",
      image: "assets/event1.png",
      date: "25/07/23",
    },
    {
      name: "Sahar.z",
      venue: "Palacio Alsina",
      image: "assets/event2.png",
      date: "25/07/23",
    },
    {
      name: "Richie Hawtin",
      venue: "Palacio Alsina",
      image: "assets/event3.png",
      date: "25/07/23",
    },
  ];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    const cardWidth = scrollContainer?.firstChild?.offsetWidth + 24; // width + gap
    const maxScroll =
      scrollContainer?.scrollWidth - scrollContainer?.clientWidth;

    const interval = setInterval(() => {
      if (scrollContainer) {
        if (scrollPosition >= maxScroll) {
          setScrollPosition(0);
          scrollContainer.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          const newPosition = scrollPosition + cardWidth;
          setScrollPosition(newPosition);
          scrollContainer.scrollTo({ left: newPosition, behavior: "smooth" });
        }
      }
    }, 3000); // Cambia cada 3 segundos

    return () => clearInterval(interval);
  }, [scrollPosition]);

  const handleScroll = (e) => {
    setScrollPosition(e.target.scrollLeft);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <h2 className="md:text-4xl text-2x1 font-bold font-urbanist mb-6 text-[#30364C]">
        Eventos destacados
      </h2>

      <div
  ref={scrollRef}
  onScroll={handleScroll}
  className="flex overflow-x-auto gap-6 pb-4 scrollbar-hide scroll-smooth"
>
  {data.map((event, index) => (
    <div
      key={index}
      className="min-w-[250px] w-2/5 md:min-w-[350px] flex-shrink-0"
    >
      <div className="rounded-2xl overflow-hidden relative">
        <img
          src={event.image}
          alt={event.name}
          className="md:w-full md:h-48 h-40 object-cover"
        />
        {/* En pantallas móviles, posicionar arriba a la derecha */}
        <span className="absolute top-2 right-2 md:hidden bg-[#C1FF71] text-[#30364C] md:text-sm text-xs font-semibold font-metropolis px-4 py-2 rounded-full">
          {event.date}
        </span>
      </div>
      <div className="mt-4 shadow-xl rounded-3xl p-3">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="md:text-xl text-sm font-bold font-urbanist text-gray-800">
              {event.name}
            </h3>
            <p className="md:text-sm text-xs font-metropolis text-gray-600 mt-1">
              {event.venue}
            </p>
          </div>
          {/* En pantallas grandes, la fecha se verá al lado del nombre y lugar */}
          <span className="md:inline hidden bg-[#C1FF71] text-[#30364C] md:text-sm text-xs font-semibold font-metropolis px-4 py-2 rounded-full">
            {event.date}
          </span>
        </div>
      </div>
    </div>
  ))}
</div>

      <style jsx global>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default EventHighlighter;
