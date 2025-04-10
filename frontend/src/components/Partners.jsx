const Partners = () => {
  return (
    <div className="border-b-0 border-[#30364C] rounded-3xl shadow-xl p-6">
      <div className="p-8 md:p-16">
        <h1 className="text-[#30364C] md:text-3xl  text-2xl font-metropolis md:mb-4 mb-6 text-left  ">
          Partners
        </h1>
        <div className="flex   justify-center gap-8 sm:gap-10 lg:gap-16 flex-wrap">
          <img
            className="object-contain w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-auto"
            src="assets/movistar-arena.jpg"
            alt="Movistar Arena"
          />
          <div className="flex flex-row gap-5">
            <img
              className="object-contain w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-auto"
              src="assets/Velez-Sarsfield.png"
              alt="Vélez Sarsfield"
            />
            <img
              className="object-contain w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-auto"
              src="assets/hipodromo-palermo.png"
              alt="Hipodromo Argentino de Palermo"
            />
            <img
              className="object-contain w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-auto"
              src="assets/river-plate.png"
              alt="River Plate"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
