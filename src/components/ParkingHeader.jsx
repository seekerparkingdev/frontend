import {  Clock } from 'lucide-react';
const ParkingHeader = () => {
    return (
      <div className="mb-4">
        <h1 className="text-xl font-bold">Estás buscando estacionamiento</h1>
        <div className="flex items-center text-gray-600 mt-2">
          <Clock className="mr-2 w-5 h-5" />
          <span>Desde 23/12/23 las 19:30 Hasta 24/12/23 las 00:30</span>
        </div>
      </div>
    );
  };

  export default ParkingHeader;