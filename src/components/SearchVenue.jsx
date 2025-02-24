import { MdOutlineCalendarMonth } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { IoSearchOutline } from "react-icons/io5";
const SearchVenue = () => {
  return (
    <div className="md:max-w-[1800px] mx-auto px-4 py-4 bg-[#F6FDFF] shadow-md rounded-lg mt-3 text-[#30364C">
      <div className="flex md:gap-16 gap-2">
        <div className="relative md:flex-1 w-2/3">
          <input
            type="text"
            placeholder="Ej: Nicki Nicole"
            className="w-full pl-10 pr-4 py-3 rounded-full border   border-[#30364C] text-sm focus:outline-none  "
          />
          <div className="absolute left-4 top-1/2 text-[#30364C] -translate-y-1/2">
            <IoSearchOutline />
          </div>
          <button className="absolute right-4 top-1/2 -translate-y-1/2">
            <RxCross2 />
          </button>
        </div>

        {/* Reducir el tamaño del input de fecha */}
        <div className="relative md:w-[600px] w-1/2">
          <div className="relative flex items-center">
            <MdOutlineCalendarMonth className="absolute left-3 text-[#30364C]  text-lg" />
            <input
              type="text"
              placeholder="¿Cuándo?"
              className="w-full pl-9 pr-8 py-3 rounded-full border border-[#30364C] text-sm  "
              readOnly
            />
            <RxCross2 className="absolute right-3 text-[#30364C]   cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchVenue;
