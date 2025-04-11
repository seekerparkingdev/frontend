import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { ArrowLeft } from "lucide-react";
import TokenIframe from "./TokenIframe";
import { PostLogin } from "../../services/Login";
const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isIframeVisible, setIsIframeVisible] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { email, password };
    const response = await PostLogin(data);
    if (response) {
      const token = response.token;
      sessionStorage.setItem("token", token);
      setIsIframeVisible(true);
    }
  };

  return (
    <div className="flex justify-center items-center p-4">
      {isIframeVisible && <TokenIframe />}
      <div className="bg-white rounded-lg md:shadow-md md:p-8 md:w-1/2  md:border-[#4B6FC7] md:border">
        <div className="md:hidden flex space-x-1 mb-4 font-bold font-urbanist">
          <ArrowLeft className="text-[#30364C]" />
          <h2 className="text-[#30364C] text-xl ">Volver</h2>
        </div>
        <div className="md:hidden mb-4 text-[#30364C] font-bold font-urbanist text-xl">
          <p>Para terminar con la reserva, es necesario que inicies sesión</p>
        </div>
        <form onSubmit={handleSubmit}>
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="text-right mt-1">
              <a
                href="#"
                className="text-[#4B6FC7] text-sm underline font-metropolis font-semibold  hidden md:block"
              >
                Olvidé mi usuario
              </a>
            </div>
          </div>

          <div className="mb-6">
            <label
              htmlFor="password"
              className="block font-metropolis text-base font-bold text-black mb-1 "
            >
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border border-[#4B6FC7] rounded-md text-sm font-semibold font-metropolis text-black"
              placeholder="***************"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="text-right mt-1">
              <a
                href="#"
                className="text-[#4B6FC7] text-sm underline font-metropolis font-semibold  hidden md:block"
              >
                Olvidé mi contraseña
              </a>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#4B6FC7] text-white md:py-6 py-3  rounded-full mb-3 md:text-[26px] text-xl md:font-metropolis font-medium font-urbanist"
          >
            Iniciar sesión
          </button>

          <button
            type="button"
            className="w-full bg-white text-[#4B6FC7] md:py-6 py-3  border-[#4B6FC7] border rounded-full  mb-6 md:mb-3 md:text-[26px] text-xl md:font-metropolis font-medium font-urbanist"
          >
            Registrarte
          </button>

          <div className="text-center mb-4 font-urbanist">
            <p className="text-sm text-[#283B72] ">¿Aún no tenés una cuenta?</p>
            <a href="/register" className="font-bold text-black text-[20px]">
              Crear una
            </a>
          </div>

          <div className="text-center mb-6">
            <a
              href="#"
              className="font-bold text-black text-[20px] font-urbanist"
            >
              Ingresá como invitado
            </a>
          </div>

          <div className="text-center">
            <p className="text-[20px] text-[#9599AA] mb-3"> ó</p>

            {/* Línea con texto "Ingresá con" */}
            <div className="flex items-center justify-center mb-3">
              <div className="w-24 h-px bg-[#DCDCDC]"></div>
              <p className="text-[20px] text-[#9599AA] mx-3">Ingresá con</p>
              <div className="w-24 h-px bg-[#DCDCDC]"></div>
            </div>

            <div className="flex justify-center space-x-4 md:mb-0 mb-9">
              <button
                type="button"
                className="p-4 md:text-2xl text-3xl text-[#0B82ED] shadow-[1px_2px_3px_0px_#0000001A] rounded-full"
              >
                <FaFacebookF />
              </button>
              <button
                type="button"
                className="p-4 shadow-[1px_2px_3px_0px_#0000001A] rounded-full"
              >
                <span className="flex  md:text-2xl text-3xl">
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

export default LoginForm;
