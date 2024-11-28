import * as Dialog from "@radix-ui/react-dialog";
import { X } from "phosphor-react";
const NewTransactionModal = () => {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed w-full min-h-dvh inset-0 bg-black/75" />
      <Dialog.Content className="fixed min-w-[32rem]  rounded-md py-10 px-12 bg-gray-800 top-2/4 left-2/4  -translate-y-2/4 -translate-x-2/4   ">
        <Dialog.Close className="absolute top-6 right-6 ">
          <X size={22} className="text-gray-500      hover:text-red-400" />
        </Dialog.Close>
        <Dialog.Title className="text-lg text-white font-bold">
          New transaction
        </Dialog.Title>
        <form className="mt-8 flex flex-col gap-4 ">
          <input
            type="text"
            placeholder="Description"
            required
            className="rounded-md bg-gray-900 text-gray-300 p-4 outline-none focus:outline-green-500 "
          />
          <input
            type="number"
            placeholder="Price"
            required
            className="rounded-md bg-gray-900 text-gray-300 p-4 outline-none focus:outline-green-500 "
          />
          <input
            type="text"
            placeholder="Category"
            required
            className="rounded-md bg-gray-900 text-gray-300 p-4 outline-none focus:outline-green-500"
          />
          <button
            type="submit"
            className="h-14 bg-green-500 text-white font-bold py-0 px-5 rounded-md outline-none mt-6 focus:outline-green-500 hover:brightness-90"
          >
            {" "}
            Create{" "}
          </button>
        </form>
      </Dialog.Content>
    </Dialog.Portal>
  );
};

export default NewTransactionModal;
