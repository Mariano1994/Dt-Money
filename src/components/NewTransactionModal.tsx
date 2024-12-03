import * as Dialog from "@radix-ui/react-dialog";
import { X } from "phosphor-react";
import NewTransactionForm from "./NewTransactionForm";

const NewTransactionModal = () => {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed w-full min-h-dvh inset-0 bg-black/75" />
      <Dialog.Content
        aria-describedby={undefined}
        className="fixed min-w-[32rem]  rounded-md py-10 px-12 bg-gray-800 top-2/4 left-2/4  -translate-y-2/4 -translate-x-2/4   "
      >
        <Dialog.Close className="absolute top-6 right-6 ">
          <X size={22} className="text-gray-500      hover:text-red-400" />
        </Dialog.Close>
        <Dialog.Title className="text-2lx text-white font-bold">
          New transaction
        </Dialog.Title>
        <NewTransactionForm />
      </Dialog.Content>
    </Dialog.Portal>
  );
};

export default NewTransactionModal;
