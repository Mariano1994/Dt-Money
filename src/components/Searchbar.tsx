import { MagnifyingGlass } from "phosphor-react";

const Searchbar = () => {
  return (
    <form className="flex items-center gap-2 mt-16 ">
      <input
        type="text"
        placeholder="Search for transactions..."
        className="flex-1 bg-gray-900 text-gray-300 p-4 rounded-md placeholder:text-gray-500 outline-none "
      />
      <button
        type="submit"
        className="group flex items-center gap-2 border border-solid p-[0.9rem] border-green-300 rounded-md outline-none transition-all hover:bg-green-300 focus:outline-green-300
      "
      >
        <MagnifyingGlass
          size={22}
          className="text-green-300 transition-all group-hover:text-white"
          weight="bold"
        />
        <span className="text-sm font-bold text-green-300 group-hover:text-white">
          Search
        </span>
      </button>
    </form>
  );
};

export default Searchbar;
