import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { ArrowLeft } from "lucide-react";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    dni: "",
    phone: "",
    email: "",
    password: "",
    city: "",
    province: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos del formulario:", formData);
  };

  return (
    <div className="flex justify-center items-center p-4">
      <div className="bg-white rounded-lg md:shadow-md md:p-8 md:w-1/2 md:border-[#4B6FC7] md:border">
        <div className="md:hidden flex space-x-1 mb-4 font-bold font-urbanist">
          <ArrowLeft className="text-[#30364C]" />
          <h2 className="text-[#30364C] text-xl">Volver</h2>
        </div>
        <div className="md:hidden mb-6 text-[#30364C] font-bold font-urbanist text-xl">
          <p>Para terminar con la reserva, es necesario que te registres</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="fullName"
              className="block font-metropolis text-base font-bold text-black mb-1"
            >
              Nombre y apellido
            </label>
            <input
              type="text"
              id="fullName"
              className="w-full px-3 py-2 border border-[#4B6FC7] rounded-md text-sm font-semibold font-metropolis text-black"
              placeholder="N/"
              value={formData.fullName}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="dni"
              className="block font-metropolis text-base font-bold text-black mb-1"
            >
              DNI
            </label>
            <input
              type="text"
              id="dni"
              className="w-full px-3 py-2 border border-[#4B6FC7] rounded-md text-sm font-semibold font-metropolis text-black"
              placeholder="45.456.789"
              value={formData.dni}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block font-metropolis text-base font-bold text-black mb-1"
            >
              Teléfono
            </label>
            <input
              type="tel"
              id="phone"
              className="w-full px-3 py-2 border border-[#4B6FC7] rounded-md text-sm font-semibold font-metropolis text-black"
              placeholder="45.456.789"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4 md:hidden">
            <label
              htmlFor="phone"
              className="block font-metropolis text-base font-bold text-black mb-1"
            >
              Ciudad
            </label>
            <input
              type="tel"
              id="phone"
              className="w-full px-3 py-2 border border-[#4B6FC7] rounded-md text-sm font-semibold font-metropolis text-black"
              placeholder="45.456.789"
              value={formData.city}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4 md:hidden">
            <label
              htmlFor="phone"
              className="block font-metropolis text-base font-bold text-black mb-1"
            >
              Provincia
            </label>
            <input
              type="tel"
              id="phone"
              className="w-full px-3 py-2 border border-[#4B6FC7] rounded-md text-sm font-semibold font-metropolis text-black"
              placeholder="45.456.789"
              value={formData.province}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block font-metropolis text-base font-bold text-black mb-1"
            >
              E-mail
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border border-[#4B6FC7] rounded-md text-sm font-semibold font-metropolis text-black"
              placeholder="usuario@gmail.com"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="password"
              className="block font-metropolis text-base font-bold text-black mb-1"
            >
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border border-[#4B6FC7] rounded-md text-sm font-semibold font-metropolis text-black"
              placeholder="***************"
              value={formData.password}
              onChange={handleChange}
            />
            <p className="text-xs text-[#4B6FC7] font-semibold mt-1  hidden md:block">
              Mínimo 12 caracteres: mayúsculas, minúsculas, caracteres
              especiales y números
            </p>
            <div className="md:hidden flex underline mt-2 text-[#274ADA] justify-center items-center">
              <img
                src="assets/movilidad-reducida.png"
                alt=""
                className="w-5 h-5"
              />
              <p className="text-base text-[#274ADA] font-semibold ml-2 md:hidden block">
                Información para personas con movilidad reducida
              </p>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#4B6FC7] text-white md:py-6 py-3 rounded-full mb-3 md:text-[26px] text-xl font-medium"
          >
            Registrate
          </button>

          <button
            type="button"
            className="w-full bg-white text-[#4B6FC7] md:py-6 py-3 md:text-[26px] text-xl border-[#4B6FC7] border rounded-full mb-6"
          >
            Iniciar sesión
          </button>

          <div className="text-center mb-4">
            <p className="text-sm text-[#283B72]">¿Ya tenés cuenta?</p>
            <a href="/" className="font-bold text-[#4B6FC7] text-lg">
              Iniciá sesión
            </a>
          </div>

          <div className="text-center mb-6">
            <a href="#" className="font-bold text-[#4B6FC7] text-lg">
              Ingresá como invitado
            </a>
          </div>

          <div className="text-center">
            <p className="text-lg text-[#9599AA] mb-3">ó</p>

            <div className="flex items-center justify-center mb-3">
              <div className="w-24 h-px bg-[#DCDCDC]"></div>
              <p className="text-lg text-[#9599AA] mx-3">Ingresá con</p>
              <div className="w-24 h-px bg-[#DCDCDC]"></div>
            </div>

            <div className="flex justify-center space-x-4 mb-4">
              <button
                type="button"
                className="p-3 text-2xl text-[#0B82ED] shadow-md rounded-full"
              >
                <FaFacebookF />
              </button>
              <button type="button" className="p-3 shadow-md rounded-full">
                <span className="flex text-2xl">
                  <FcGoogle />
                </span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
