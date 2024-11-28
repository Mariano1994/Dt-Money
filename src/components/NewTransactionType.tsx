import { ArrowCircleDown, ArrowCircleUp } from "phosphor-react";

const NewTransactionType = () => {
  return (
    <div className="grid grid-cols-2 gap-2 mt-2">
      <button className="flex items-center justify-center p-4 bg-gray-700 gap-2 rounded-md">
        <ArrowCircleUp className="text-green-300" size={24} />
        <span className="text-gray-300">Income</span>
      </button>
      <button className="flex items-center justify-center p-4 bg-gray-700 gap-2 rounded-md">
        <ArrowCircleDown className="text-red-300" size={24} />
        <span className="text-gray-300">Outcome</span>
      </button>
    </div>
  );
};

export default NewTransactionType;
