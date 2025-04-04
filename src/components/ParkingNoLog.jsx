import { Key, MoveUp, MoveDown  } from "lucide-react";
 
const ParkingNoLog = () => {
  return (
    <div className="max-w-lg mx-auto bg-white rounded-xl shadow-md overflow-hidden py-4 px-14 font-urbanist">
      {/* Encabezado */}
      <div className="text-[#394A8F] text-[25px] font-bold  mb-2">
        En el estacionamiento
      </div>

      {/* Información del estacionamiento */}
      <div className="mb-4">
        <div className="font-bold  text-[#283B72] font-metropolis text-[25px]">
          Thames
        </div>
        <div className="flex items-center text-[#283B72] text-[15px] font-metropolis font-semibold">
          <span>Thames 539</span>
          <span className="mx-2 text-[#4B6FC7]">•</span>
          <img
            src="assets/distancia.png"
            alt="distancia"
            className="w-12 h-5"
          />
          <span className="ml-2 text-[#4B6FC7]">550 MTS</span>
        </div>
        <span className="text-[15px] text-[#283B72]">Buenos Aires</span>
      </div>

      {/* Imágenes de estacionamiento */}
      <div className="grid grid-cols-4 gap-1 mb-3">
        <img
          src="/assets/parkings.png"
          alt="Estacionamiento 1"
          className="w-full h-20 object-cover rounded-md"
        />
        <img
          src="/assets/parkings.png"
          alt="Estacionamiento 2"
          className="w-full h-20 object-cover rounded-md"
        />
        <img
          src="/assets/parkings.png"
          alt="Estacionamiento 3"
          className="w-full h-20 object-cover rounded-md"
        />
        <img
          src="/assets/parkings.png"
          alt="Estacionamiento 4"
          className="w-full h-20 object-cover rounded-md"
        />
      </div>

      {/* Espacios disponibles */}
      <div className="text-[#394A8F] text-[15px] font-semibold font-metropolis mb-4">
        Quedan solo 25 lugares
      </div>

      {/* Selector de vehículo */}
      <div className="mb-4">
  <div className="flex items-center pb-2  ">
    <span className="text-[#394A8F] font-medium">Selecciona tu vehículo</span>
    <MoveUp size={16} className="text-[#D2D8D9]" />
    <MoveDown size={16} className="text-[#394A8F]" />
  </div>
</div>


      {/* Requisito de llaves */}
      <div className="flex items-center mb-6 text-sm text-[#394A8F] font-semibold text-[15px] font-metropolis">
      <img src="assets/keys.png" alt="llave"  className="mr-2"/>
        <span >Este estacionamiento requiere dejar las llaves</span>
      </div>

      {/* Texto instructivo */}
      <div className="text-center  text-[25px] font-metropolis text-[#283B72] font-bold mb-4">
        Para finalizar la reserva es necesario
      </div>

      {/* Botones */}
      <div className="space-y-2">
        <button className="w-full py-2 bg-[#4B6FC7] text-[#D4F7FF] text-[26px] rounded-[40px] font-medium">
          Iniciar sesión
        </button>
        <button className="w-full py-2 text-[26px] bg-white text-[#4B6FC7] border border-[#4B6FC7] rounded-[40px]  font-medium">
          Registrarte
        </button>
      </div>
    </div>
  );
};

export default ParkingNoLog;
