import logo from "../assets/logo.svg";

const Header = () => {
  return (
    <header className="w-full bg-gray-900 pt-[2.5rem] pr-0 pb-[7.5rem] pl-0  ">
      <div className="w-[100%] max-w-[1120px] my-0 mx-auto py-0 px-6 flex items-center justify-between">
        <img src={logo} alt="application logo" />
        <button className="h-12 transition-all bg-green-500 px-4 rounded-md text-white font-semibold hover:brightness-90">
          New transaction
        </button>
      </div>
    </header>
  );
};

export default Header;
