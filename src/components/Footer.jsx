import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-white px-4 pt-4 pb-6 font-urbanist">
      {/* Sección de enlaces */}
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* Sumar estacionamiento */}
          <div>
            <h3 className="text-xl text-[#30364C] font-semibold font-urbanist mb-1">
              Sumar estacionamiento
            </h3>
            <ul className="hidden sm:block text-base space-y-0.5 font-metropolis">
              <li className="text-[#30364C] hover:underline cursor-pointer">
                Formulario de registro
              </li>
              <li className="text-[#30364C] hover:underline cursor-pointer">
                Información estacionamiento
              </li>
            </ul>
          </div>

          {/* Empresas */}
          <div>
            <h3 className="text-xl text-[#30364C] font-urbanist font-semibold mb-1">
              Empresas
            </h3>
            <ul className="hidden sm:block text-base space-y-0.5 font-metropolis">
              <li className="text-[#30364C] hover:underline cursor-pointer">
                Formulario de registro
              </li>
              <li className="text-[#30364C] hover:underline cursor-pointer">
                Información empresas
              </li>
            </ul>
          </div>

          {/* Sobre nosotros */}
          <div>
            <h3 className="text-xl text-[#30364C] font-urbanist font-semibold mb-1">
              Sobre nosotros
            </h3>
            <ul className="hidden sm:block text-base space-y-0.5 font-metropolis ">
              <li className="text-[#30364C] hover:underline cursor-pointer">
                Misión, visión y valores
              </li>
              <li className="text-[#30364C] hover:underline cursor-pointer">
                Historia
              </li>
              <li className="text-[#30364C] hover:underline cursor-pointer">
                Quiénes somos
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-xl text-[#30364C] font-urbanist font-semibold mb-1">
              Contacto
            </h3>
            <ul className="hidden sm:block text-base space-y-0.5 font-metropolis">
              <li className="text-[#30364C] hover:underline cursor-pointer">
                Formulario de contacto
              </li>
              <li className="text-[#30364C] hover:underline cursor-pointer">
                info@seekerparking.com
              </li>
            </ul>
          </div>

          {/* Ayuda */}
          <div>
            <h3 className="text-xl text-[#30364C] font-urbanist  font-semibold mb-1">
              Ayuda
            </h3>
            <ul className="hidden sm:block text-base space-y-0.5 font-metropolis">
              <li className="text-[#30364C] hover:underline cursor-pointer">
                FAQ
              </li>
              <li className="text-[#30364C] hover:underline cursor-pointer">
                WhatsApp Bot
              </li>
              <li className="text-[#30364C] hover:underline cursor-pointer">
                Políticas
              </li>
            </ul>
            <div className="mt-4 sm:mt-4">
              <button className="border font-urbanist text-center border-[#30364C] px-2 py-1 rounded-2xl text-base">
                Arrepentimiento
              </button>
            </div>
          </div>
        </div>

        {/* Sección inferior */}
        <div className="mt-4 sm:mt-2 flex flex-col items-start text-center sm:text-left">
          <div className="flex justify-center sm:justify-start items-center mb-4">
            <img
              src="/assets/logo-title.png"
              alt="Logo Seeker"
              className="h-10 mr-2"
            />
          </div>
          <p className="text-lg text-[#30364C] mt-1">
            © 2023 Seeker Parking. Todos los derechos reservados.
          </p>
          <div className="flex justify-center sm:justify-start space-x-3 mt-4">
            <FaFacebookF
              size={20}
              className="text-[#30364C] text-sm cursor-pointer"
            />
            <FaTwitter
              size={20}
              className="text-[#30364C] text-sm cursor-pointer"
            />
            <FaInstagram
              size={20}
              className="text-[#30364C] text-sm cursor-pointer"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
