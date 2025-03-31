import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Solución para los íconos de Leaflet en React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png"
});

// Definición de iconos personalizados
const createCustomIcon = (iconUrl, iconSize = [25, 25]) => {
  return L.icon({
    iconUrl,
    iconSize,
    iconAnchor: [12, 12],
    popupAnchor: [0, -12]
  });
};

const LocationMap = () => {
  // Coordenadas del Movistar Arena en Buenos Aires
  const movistarArena = {
    position: [-34.5995, -58.4498],
    name: "Movistar Arena",
    address: "Fitz Roy 388",
    neighborhood: "Villa Crespo",
    distance: "0 mts",
    status: "available"
  };

  // Otras ubicaciones de ejemplo
  const locations = [
    movistarArena,
    {
      position: [-34.6037, -58.4559],
      name: "Palermo Hollywood",
      address: "Av. Juan B. Justo 1600",
      neighborhood: "Palermo",
      distance: "800 mts",
      status: "unavailable"
    },
    {
      position: [-34.5935, -58.4383],
      name: "Plaza Mafalda",
      address: "Guemes 3950",
      neighborhood: "Palermo",
      distance: "1.2 km",
      status: "exhausted"
    },
    {
      position: [-34.5939, -58.4613],
      name: "Distrito Arcos",
      address: "Av. Santa Fe 3200",
      neighborhood: "Palermo",
      distance: "1.5 km",
      status: "available"
    }
  ];

  const [selectedLocation, setSelectedLocation] = useState(movistarArena);
  const [activeFilter, setActiveFilter] = useState("nearest");

  // Función para obtener el icono según el estado
  const getMarkerIcon = (status) => {
    switch (status) {
      case "available":
        return createCustomIcon("assets/locationgreen.png");
      case "unavailable":
        return createCustomIcon("assets/locationgray.png");
      case "exhausted":
        return createCustomIcon("assets/locationorange.png");
      default:
        return createCustomIcon("assets/locationskyblue.png");
    }
  };

  // Función para filtrar ubicaciones
  const filterLocations = (filter) => {
    setActiveFilter(filter);
    // Aquí implementarías la lógica real de filtrado
  };

  return (
    <div className="w-full h-[97%] flex flex-col p-4">
      {/* Filtros superiores */}
      <div className="flex w-full space-x-2 p-2 bg-white z-10 rounded-lg">
        <button 
          className={`flex-1 flex items-center justify-center px-2 py-2 rounded-full shadow-[0px_1px_2px_0px_#0000004D] text-[15px] bg-[#F6FDFF] text-blue-600 ${activeFilter === "nearest" ? "bg-blue-100" : ""}`}
          onClick={() => filterLocations("nearest")}
        >
          <img className="mr-2" src="assets/locationskyblue.png" alt="" />
          Más cercano
        </button>
        <button 
          className={`flex-1 flex items-center justify-center px-2 py-2 rounded-full shadow-[0px_1px_2px_0px_#0000004D] text-[15px] bg-[#F6FDFF] text-blue-600 ${activeFilter === "available" ? "bg-blue-100" : ""}`}
          onClick={() => filterLocations("available")}
        >
          <img className="mr-2" src="assets/locationgreen.png" alt="" />
          Disponible
        </button>
        <button 
          className={`flex-1 flex items-center justify-center px-2 py-2 rounded-full shadow-[0px_1px_2px_0px_#0000004D] text-[15px] bg-[#F6FDFF] text-blue-600 ${activeFilter === "unavailable" ? "bg-blue-100" : ""}`}
          onClick={() => filterLocations("unavailable")}
        >
          <img className="mr-2" src="assets/locationgray.png" alt="" />
          No disponible
        </button>
        <button 
          className={`flex-1 flex items-center justify-center px-2 py-2 rounded-full shadow-[0px_1px_2px_0px_#0000004D] text-[15px] bg-[#F6FDFF] text-blue-600 ${activeFilter === "exhausted" ? "bg-blue-100" : ""}`}
          onClick={() => filterLocations("exhausted")}
        >
          <img className="mr-2" src="assets/locationorange.png" alt="" />
          Agotado
        </button>
      </div>
      
      {/* Contenedor principal del mapa con posición relativa */}
      <div className="relative flex-grow bg-gray-200 overflow-hidden rounded-lg shadow-md mt-2">
        {/* Mapa real usando Leaflet */}
        <div className="absolute inset-0">
          <MapContainer 
            center={movistarArena.position} 
            zoom={15} 
            style={{ height: "100%", width: "100%" }}
            zoomControl={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            
            {locations.map((location, index) => (
              <Marker 
                key={index} 
                position={location.position}
                icon={getMarkerIcon(location.status)}
                eventHandlers={{
                  click: () => {
                    setSelectedLocation(location);
                  }
                }}
              >
                <Popup>
                  <div className="text-sm">
                    <strong>{location.name}</strong><br />
                    {location.address}
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
        
        {/* Tarjeta de información - Diseño original con z-index para asegurar que esté siempre visible */}
        <div className="flex absolute top-12 left-12 bg-white rounded-xl shadow-lg w-96 overflow-hidden p-4 z-[1000]">
          {/* Área azul con marcador */}
          <div className="bg-[#9CE8FF] w-28 h-24 flex items-center justify-center relative rounded-xl">
            <div className="absolute w-4 h-4 bg-white rounded-full flex items-center justify-center">
              <img className="bg-[#9CE8FF]" src="assets/location.png" alt="" />
            </div>
          </div>
          {/* Información de la ubicación */}
          <div className="px-3 h-24 font-metropolis">
            <h3 className="font-semibold text-[#394A8F] text-base">
              {selectedLocation.name}
            </h3>
            <div className="flex items-center gap-2">
              <p className="text-sm text-[#283B72] font-semibold">
                {selectedLocation.address}
              </p>
              <span className="mx-2 text-[#4B6FC7]">•</span>
              <img
                src="assets/distancia.png"
                alt="distancia"
                className="w-12 h-5"
              />
            
            </div>
            <p className="text-[15px] text-[#283B72] font-medium">
              {selectedLocation.neighborhood}
            </p>
            <a
              href="#"
              className="text-sm text-[#4B6FC7] font-bold mt-1 block"
            >
              Ver ubicación
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationMap;