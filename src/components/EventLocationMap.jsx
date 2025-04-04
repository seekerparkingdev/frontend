import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { MapPin, CalendarDays } from "lucide-react";
import { useState } from "react";
// Fix for Leaflet icons in React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});
const createImageIcon = (imageUrl, size = [32, 32]) => {
  return L.icon({
    iconUrl: imageUrl,
    iconSize: size,
    iconAnchor: [size[0] / 2, size[1]],
    popupAnchor: [0, -size[1]],
  });
};

const EventLocationMap = () => {
    
  const eventInfo = {
    title: "Él mató un policía motorizado",
    venue: "Movistar Arena",
    startDate: "23/12/23",
    startTime: "19:30",
    endDate: "24/12/23",
    endTime: "00:30",
    imageUrl: "assets/event2.png",
  };

  const movistarArena = {
    position: [-34.5995, -58.4498],
    name: "Movistar Arena Parking Oficial",
    address: "Fitz Roy 386",
    neighborhood: "Villa Crespo",
    distance: "0 mts",
    status: "available",
  };
  const [selectedLocation, setSelectedLocation] = useState(movistarArena);
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
        return createImageIcon("assets/locationgreen.png");
      case "unavailable":
        return createImageIcon("assets/locationgray.png");
      case "exhausted":
        return createImageIcon("assets/locationorange.png");
      default:
        return createImageIcon("assets/locationskyblue.png");
    }
  };

  return (
    <div className="w-full relative">
      {/* Event Info Card */}
      <div className="bg-white rounded-2xl shadow-md h-36 mb-4">
        <div className="flex items-start">
          <img
            src={eventInfo.imageUrl}
            alt="Event"
            className="w-40 h-36 mr-3 rounded-tl-2xl rounded-bl-2xl object-cover"
          />
          <div className="flex-1 p-2">
            <h3 className="font-bold text-[25px] text-[#30364C]">
              {eventInfo.title}
            </h3>
            <div className="text-lg font-medium text-[#30364C] flex items-center">
              <span className="flex justify-center">
                <MapPin size={20} className="mr-2" /> {eventInfo.venue}
              </span>
            </div>
            <div className="flex text-lg font-medium text-[#30364C] mt-1">
              <CalendarDays size={20} className="mr-2" /> Desde{" "}
              <span className="ml-1 mr-1"> {eventInfo.startDate} </span> a las{" "}
              <span className="ml-1 mr-1">{eventInfo.startTime}</span>
            </div>
            <div className="text-lg font-medium text-[#30364C] flex ml-7">
              Hasta <span className="ml-1 mr-1"> {eventInfo.endDate}</span> a
              las <span className="ml-1 mr-1">{eventInfo.endTime}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="relative h-[35rem] rounded-lg overflow-hidden shadow-md">
        {/* Contenedor del mapa con posición absoluta para llenar el espacio */}
        <div className="absolute inset-0">
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
                eventHandlers={{
                  click: () => setSelectedLocation(location)
                }}
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
        
        {/* Tarjeta de información con z-index elevado */}
        <div className="flex absolute top-4 left-4 bg-white rounded-xl shadow-lg w-[28rem] h-40 overflow-hidden p-4  z-[1000]">
          {/* Área azul con marcador */}
          <div className="bg-[#9CE8FF] w-32 h-30 flex items-center justify-center relative rounded-xl">
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

export default EventLocationMap;