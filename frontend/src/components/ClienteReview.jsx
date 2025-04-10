import React from "react";

const ClientReview = () => {
  const clients = [
    {
      image: "assets/client1.jpg",
      name: "Elizabeth Flores",
      review:
        "Tuvimos una experiencia buenísima. Compramos a tiempo, llegamos puntuales. Con el QR estacional sin vueltas",
    },
    {
      image: "assets/client2.png",
      name: "Stefania Schoeffer",
      review:
        "Tuvimos una experiencia buenísima. Compramos a tiempo, llegamos puntuales. Con el QR estacional sin vueltas",
    },
    {
      image: "assets/client3.png",
      name: "Guillermo González",
      review:
        "Tuvimos una experiencia buenísima. Compramos a tiempo, llegamos puntuales. Con el QR estacional sin vueltas",
    },
    {
      image: "assets/client1.jpg",
      name: "Mariela Giovanni",
      review:
        "Tuvimos una experiencia buenísima. Compramos a tiempo, llegamos puntuales. Con el QR estacional sin vueltas",
    },
    {
      image: "assets/client2.png",
      name: "Horacio Gomez Hallem",
      review:
        "Tuvimos una experiencia buenísima. Compramos a tiempo, llegamos puntuales. Con el QR estacional sin vueltas",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 ">
      <div className="max-w-9xl mx-auto">
        <h1 className="text-3xl font-bold font-urbanist text-[#30364C] mb-12">
          La seguridad de tú vehículo,
          <br />
          es nuestro compromiso.
        </h1>

        {/* Contenedor del carrusel */}
        <div className="overflow-x-auto flex space-x-6 py-4 justify-center">
          {/* Fila de tarjetas */}
          <div className="flex space-x-6">
            {clients.map((client, index) => (
              <div
                key={index}
                className="bg-[#F6FDFF] rounded-lg p-6 shadow-lg flex flex-col items-center w-60"
              >
                {/* Contenedor de la imagen centrado */}
                <div className="w-full flex justify-center mb-4">
                  <img
                    src={client.image}
                    alt={client.name}
                    className="w-30 h-30 rounded-full object-cover"
                  />
                </div>
                {/* Contenedor del texto centrado */}
                <div className="w-full flex flex-col items-start">
                  <p className="text-[#30364C] text-sm font-metropolis mb-3">
                    "{client.review}"
                  </p>
                  <h3 className="font-urbanist font-semibold text-[#30364C]">{client.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientReview;
