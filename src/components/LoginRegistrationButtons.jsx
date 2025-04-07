const LoginRegistrationButtons = () => {
  return (
    <div className="flex flex-col w-full max-w-xs mx-auto space-y-4 p-4 font-metropolis md:hidden">
      <button className="w-full py-3 rounded-full font-medium bg-[#4B6FC7] text-white">
        Iniciar sesión
      </button>

      <button className="w-full py-3 rounded-full font-medium bg-white border border-[#4B6FC7] text-[#4B6FC7]">
        Registrarte
      </button>
    </div>
  );
};

export default LoginRegistrationButtons;
