import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { MapPin, CalendarDays } from "lucide-react";
import { useState } from "react";
import MobileParkingMap from "./MobileParkingMap";
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
    imageUrl: "assets/policia-motorizada.png",
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
    <div className="w-full relative ">
      {/* Event Info Card */}
      <div className="bg-white rounded-2xl shadow-md h-36 mb-4 hidden md:block">
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
      <div className="px-4">
        {/* Mobile layout - stacked */}
        <div className="md:hidden flex flex-col">
          <div className="text-[25px] font-bold text-[#30364C] p-2 mb-4">
            <h1>
              Estas reservando una plaza de estacionamiento para el evento
            </h1>
          </div>

          <div className="border rounded-2xl border-[#9599AA66]">
            <img
              src={eventInfo.imageUrl}
              alt="Event"
              className="w-full h-80 rounded-t-2xl object-cover"
            />
            <div className="p-5 bg-white rounded-b-2xl">
              <div className="relative w-full overflow-hidden">
                <h3
                  className="font-bold text-2xl text-[#30364C] inline-block whitespace-nowrap overflow-hidden w-full"
                  style={{ textOverflow: "clip" }}
                >
                  {eventInfo.title}
                </h3>

                <div
                  className="absolute top-0 right-0 h-full w-3/4"
                  style={{
                    background:
                      "linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.5) 40%, rgba(255, 255, 255, 1) 100%)",
                  }}
                ></div>
              </div>
              <div className="text-base font-medium text-[#30364C] flex items-center mt-2">
                <span className="flex items-center text-[#30364C] font-bold font-urbanist text-[25px]">
                  <MapPin size={18} className="mr-1" /> {eventInfo.venue}
                </span>
              </div>
              <div className="flex flex-col text-[15px] font-medium text-[#30364C] mt-2">
                <div className="flex items-center">
                  <CalendarDays size={18} className="mr-1" />
                  <span className="ml-1">
                    Desde {eventInfo.startDate} a las {eventInfo.startTime}
                  </span>
                </div>
                <div className="flex items-center ml-6 mt-1">
                  <span>
                    Hasta {eventInfo.endDate} a las {eventInfo.endTime}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-2 md:hidden block">
          <span className="text-[15px] text-[#293251] font-semibold ">
            Dirección del evento
          </span>
        </div>
        {/* Tarjeta de información de la ubicación (Mobile) */}
        <div className="flex   bg-white rounded-xl   w-full overflow-hidden py-4 px-2 md:hidden  border  border-[#9599AA66] shadow-[0px_1px_2px_0px_#0000004D,_0px_2px_6px_2px_#00000026]">
          {/* Área azul con marcador */}
          <div className="bg-[#9CE8FF] w-28   flex items-center justify-center relative rounded-xl">
            <div className="absolute w-4 h-4 bg-white rounded-full flex items-center justify-center">
              <img className="bg-[#9CE8FF]" src="assets/location.png" alt="" />
            </div>
          </div>
          {/* Información de la ubicación */}
          <div className="px-3  font-metropolis">
            <h3 className="font-semibold text-[#394A8F] text-sm">
              {selectedLocation.name}
            </h3>
            <div className="flex items-center">
              <p className="text-xs text-[#283B72] font-semibold">
                {selectedLocation.address}
              </p>
              <span className="mx-2 text-[#4B6FC7]">•</span>
              <img
                src="assets/distancia.png"
                alt="distancia"
                className="w-12 h-5"
              />
            </div>
            <p className="text-xs text-[#283B72] font-medium">
              {selectedLocation.neighborhood}
            </p>
            <a href="#" className="text-[11px] text-[#4B6FC7] font-bold mt-1  ">
              Ver ubicación
            </a>
          </div>
        </div>
      </div>

      <MobileParkingMap />
      {/* Map Destok*/}
      <div className="relative h-[35rem] rounded-lg overflow-hidden shadow-md hidden md:block">
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
                  click: () => setSelectedLocation(location),
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
        <div className="md:flex absolute top-4 left-4 bg-white rounded-xl shadow-lg w-[28rem] h-40 overflow-hidden p-4  z-[1000] hidden ">
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
            <a href="#" className="text-sm text-[#4B6FC7] font-bold mt-1 block">
              Ver ubicación
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventLocationMap;
