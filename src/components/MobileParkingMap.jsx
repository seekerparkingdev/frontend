import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { MoveUp, MoveDown } from "lucide-react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix para los iconos por defecto en React Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: null,
  iconUrl: null,
  shadowUrl: null,
});

const MobileParkingMap = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);

  // Define la ubicación central (Movistar Arena Buenos Aires)
  const movistarArena = {
    position: [-34.6062, -58.4309],
    name: "Movistar Arena",
  };

  // Función para crear iconos de marcador personalizados
  const createImageIcon = (imageUrl) => {
    return L.icon({
      iconUrl: imageUrl,
      iconSize: [28, 28], // Ligeramente más pequeño para móviles
      iconAnchor: [14, 28],
      popupAnchor: [0, -28],
    });
  };

  // Función para obtener el icono según el estado
  const getMarkerIcon = (status) => {
    switch (status) {
      case "available":
        return createImageIcon("assets/locationgreen.png");
      case "unavailable":
        return createImageIcon("assets/locationgray.png");
      case "exhausted":
        return createImageIcon("assets/locationorange.png");
      default:
        return createImageIcon("assets/locationskyblue.png");
    }
  };

  // Datos de muestra para ubicaciones de estacionamiento
  const parkingLocations = [
    {
      name: "Thames",
      address: "Thames 539",
      neighborhood: "Buenos Aires",
      position: [-34.6052, -58.4329],
      status: "available",
      availableSpots: 25,
      distance: "450 mts",
    },
    {
      name: "Kyokushin",
      address: "Av. Córdoba 4800",
      neighborhood: "Buenos Aires",
      position: [-34.6066, -58.4335],
      status: "unavailable",
      availableSpots: 0,
      distance: "320 mts",
    },
    {
      name: "La Llavi",
      address: "Gorriti 5500",
      neighborhood: "Buenos Aires",
      position: [-34.607, -58.4305],
      status: "exhausted",
      availableSpots: 5,
      distance: "550 mts",
    },
    {
      name: "Tienda de Iluminación",
      address: "Av. Córdoba 4900",
      neighborhood: "Buenos Aires",
      position: [-34.6055, -58.4285],
      status: "available",
      availableSpots: 15,
      distance: "380 mts",
    },
  ];

  return (
    <div className=" rounded-3xl w-full h-full flex flex-col   border mt-5 mb-5 md:hidden font-urbanist">
      {/* Tarjeta de información de estacionamiento */}
      <div className="bg-white rounded-t-3xl  px-4 py-3 shadow-md z-10">
        <h2 className="text-[25px] font-bold text-[#30364C] mt-4">
          En el estacionamiento
        </h2>
        <h3 className="text-[#283B72] text-lg mt-4 font-metropolis font-semibold">
          Thames
        </h3>
        <div className="flex items-center gap-2 text-[13px] text-[#283B72] font-semibold font-metropolis">
          <span>Thames 539</span>
          <span className="text-[#4B6FC7]">•</span>
          <div className="flex items-center text-[#4B6FC7]">
            <img src="assets/distancia.png" alt="" />
            <span className="ml-1">450 mts</span>
          </div>
        </div>
        <span className="text-xs text-[#283B72] font-medium font-metropolis">
          Buenos aires
        </span>
        <div className="flex my-2 gap-4 overflow-x-auto pb-1   justify-center">
          {[1, 2, 3].map((img) => (
            <div
              key={img}
              className="flex-shrink-0 w-28 h-24   rounded-[10px] overflow-hidden"
            >
              <img
                src={`/assets/parkings.png`}
                alt="Lugar"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        <p className="text-[#394A8F] text-sm font-semibold font-metropolis">
          Quedan sólo 25 lugares
        </p>
      </div>

      <div className="relative h-96 w-full">
        <MapContainer
          center={movistarArena.position}
          zoom={16}
          style={{ height: "100%", width: "100%" }}
          zoomControl={false}
          attributionControl={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {parkingLocations.map((location, index) => (
            <Marker
              key={index}
              position={location.position}
              icon={getMarkerIcon(location.status)}
              eventHandlers={{
                click: () => setSelectedLocation(location),
              }}
            >
              <Popup className="text-xs">
                <div>
                  <strong>{location.name}</strong>
                  <br />
                  {location.address}
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
      {/* Botón de selección de vehículo */}
      <div className="bg-white p-3 shadow-md border-t border-gray-200 z-10 rounded-b-3xl">
        <div className="flex items-center justify-center  gap-2 text-xs text-[#394A8F] mt-2 font-semibold mb-3">
          <img src="assets/keys.png" alt="llave" />
          <span>Este estacionamiento requiere dejar las llaves</span>
        </div>
        <div className="flex items-center justify-center pb-2 mb-2  ">
          <span className="text-[#30364C] font-semibold text-xl font-urbanist ">
            Selecciona tu vehículo
          </span>
          <MoveUp size={16} className="text-[#D2D8D9]" />
          <MoveDown size={16} className="text-[#394A8F]" />
        </div>
      </div>


      
    </div>
  );
};

export default MobileParkingMap;
