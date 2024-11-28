import logo from "../assets/logo.svg";
import * as Dialog from "@radix-ui/react-dialog";
import NewTransactionModal from "./NewTransactionModal";

const Header = () => {
  return (
    <header className="w-full bg-gray-900 pt-[2.5rem] pr-0 pb-[7.5rem] pl-0  ">
      <div className="w-[100%] max-w-[1120px] my-0 mx-auto py-0 px-6 flex items-center justify-between">
        <img src={logo} alt="application logo" />
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <button className="h-12 transition-all bg-green-500 px-4 rounded-md text-white font-semibold outline-none hover:brightness-90 focus:outline-green-300">
              New transaction
            </button>
          </Dialog.Trigger>
          <NewTransactionModal />
        </Dialog.Root>
      </div>
    </header>
  );
};

export default Header;
