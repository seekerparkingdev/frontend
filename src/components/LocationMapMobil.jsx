import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Solución para los íconos de Leaflet en React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

// Definición de iconos personalizados
const createCustomIcon = (color, size = [25, 25]) => {
  return L.divIcon({
    html: `<div style="background-color: ${color}; width: 100%; height: 100%; border-radius: 50%; display: flex; align-items: center; justify-content: center;"><div style="color: white; transform: translateY(-3px);">📍</div></div>`,
    className: "custom-div-icon",
    iconSize: size,
    iconAnchor: [12, 12],
    popupAnchor: [0, -12],
  });
};

const LocationMapMobil = () => {
  // Estado para controlar si se muestra el mapa o la lista
  const [showMap, setShowMap] = useState(true);

  // Toggle entre mapa y lista
  const toggleView = () => {
    setShowMap(!showMap);
  };

  // Coordenadas del Movistar Arena en Buenos Aires
  const movistarArena = {
    position: [-34.5995, -58.4498],
    name: "Movistar Arena Parking Oficial",
    address: "Fitz Roy 386",
    neighborhood: "Villa Crespo",
    distance: "0 mts",
    status: "available",
  };

  // Otras ubicaciones de ejemplo para estacionamientos
  const parkingLocations = [
    movistarArena,
    {
      position: [-34.6037, -58.4559],
      name: "Estacionamiento 1",
      address: "Av. Juan B. Justo 1600",
      neighborhood: "Palermo",
      distance: "800 mts",
      status: "available",
    },
    {
      position: [-34.5935, -58.4383],
      name: "Estacionamiento 2",
      address: "Guemes 3950",
      neighborhood: "Palermo",
      distance: "1.2 km",
      status: "available",
    },
  ];

  // Íconos para los estados
  const getMarkerIcon = (status) => {
    switch (status) {
      case "available":
        return createCustomIcon("#4B6FC7");
      case "unavailable":
        return createCustomIcon("#9CA3AF");
      default:
        return createCustomIcon("#4B6FC7");
    }
  };

  return (
    <div className="block md:hidden max-w-md mx-auto bg-gray-50 font-urbanist">
      <div className="mb-3">
        <h1 className="text-[#293251] text-[15px] font-urbanist font-semibold">
          Direccion del evento
        </h1>
      </div>
      {/* Sección de dirección del evento */}
      <div className="flex    shadow-[0px_1px_2px_0px_rgba(0,0,0,0.3)] bg-white rounded-xl   w-96  mb-2 p-4">
        {/* Área azul con marcador */}
        <div className="bg-[#9CE8FF] w-28 h-24 flex items-center justify-center relative rounded-xl">
          <div className="absolute w-4 h-4 bg-white rounded-full flex items-center justify-center">
            <img className="bg-[#9CE8FF]" src="assets/location.png" alt="" />
          </div>
        </div>
        {/* Información de la ubicación */}
        <div className="px-3 h-24 font-metropolis">
          <h3 className="font-semibold text-[#394A8F] text-base">Tomas</h3>
          <div className="flex items-center gap-2">
            <p className="text-sm text-[#283B72] font-semibold">
              Darragueira 2330
            </p>
            <span className="mx-2 text-[#4B6FC7]">•</span>
            <img
              src="assets/distancia.png"
              alt="distancia"
              className="w-12 h-5"
            />
          </div>
          <p className="text-[15px] text-[#283B72] font-medium">neighborhood</p>
          <a href="#" className="text-sm text-[#4B6FC7] font-bold mt-1 block">
            Ver ubicación
          </a>
        </div>
      </div>
      {/* Sección de horarios */}
      <div className="bg-[#F6FDFF] rounded-3xl shadow-[0px_1px_2px_0px_rgba(0,0,0,0.3)] mx-4 mb-4 mt-6 font-urbanist">
        <div className="flex ">
          <div className="w-1/4 p-4 font-bold text-[#30364C]">Entrada</div>
          <div className="w-3/8 p-4 text-gray-800">23/12/23</div>
          <div className="w-3/8 p-4 flex items-center text-gray-800">
            19:30
            <span className="ml-2 font-bold text-[#30364C]">Horas</span>
          </div>
        </div>
        <div className="flex">
          <div className="w-1/4 p-4 font-bold text-[#30364C]">Salida</div>
          <div className="w-3/8 p-4 text-gray-800">24/12/23</div>
          <div className="w-3/8 p-4 flex items-center text-gray-800">
            00:30
            <span className="ml-2 font-bold text-[#30364C]">Horas</span>
          </div>
        </div>
      </div>
      {/* Sección de estacionamientos disponibles con botón toggle */}
      <div className="mx-4 mb-4">
        <h2 className="text-xl font-bold font-urbanist text-[#30364C]  mb-2">
          13 estacionamientos disponibles
        </h2>
        <button
          className="text-[#30364C]  font-urbanist font-bold hover:underline focus:outline-none"
          onClick={toggleView}
        >
          {showMap ? "Ver lista" : "Ver mapa"}
        </button>
      </div>

      {/* Sección del mapa o lista (toggle) */}
      {showMap ? (
        // Vista del mapa
        <div className="h-64 mx-4 mb-4 rounded-lg overflow-hidden shadow-md relative">
          <MapContainer
            center={movistarArena.position}
            zoom={15}
            style={{ height: "100%", width: "100%" }}
            zoomControl={false}
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
              >
                <Popup>
                  <div className="text-sm">
                    <strong>{location.name}</strong>
                    <br />
                    {location.address}
                    <br />
                    {location.neighborhood}
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      ) : null}
    </div>
  );
};

export default LocationMapMobil;
