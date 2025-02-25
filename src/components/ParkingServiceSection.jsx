import React from "react";

const ParkingServiceSection = () => {
  const features = [
    {
      title: "Fácil",
      description:
        "Reservas tu plaza de estacionamiento con mucho tiempo de anticipación.",
    },
    {
      title: "Rápido",
      description:
        "El día del evento te estaremos esperando para ayudarte a estacionar con QR.",
    },
    {
      title: "Seguro",
      description:
        "Trabajamos junto a los mejores estacionamientos de la ciudad para garantizar la seguridad de tu vehículo.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12  ">
      <div className="flex flex-col lg:flex-row items-center gap-32 gap-x-52">
        {/* Left side - Image */}
        <div className="lg:w-1/2">
          <div className="relative">
            <div className="m-5">
              <h2 className="text-4xl text-[#30364C] font-semibold font-urbanist mb-2">
                #EstacionarEsFácil
              </h2>
              <p className="text-[#30364C] text-lg font-metropolis">
                Estacioná de manera inteligente
              </p>
            </div>
            <div className="absolute -z-10 top-0 right-0 w-64 h-64   rounded-full opacity-50 blur-3xl" />
            <img
              src="assets/parking-service-home.jpg"
              alt="Parking service illustration"
              className="relative z-10 w-full"
            />
          </div>
        </div>

        {/* Right side - Content */}
        <div className="lg:w-1/2 space-y-8 hidden sm:block">
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-4 h-4 mt-1 rounded-full bg-blue-100 flex-shrink-0" />
                <div>
                  <h3 className="text-3xl font-urbanist  text-[#30364C] mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-[#30364C] font-metropolis">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParkingServiceSection;
