import { ArrowCircleDown, ArrowCircleUp } from "phosphor-react";
import * as RadioGroup from "@radix-ui/react-radio-group";

const NewTransactionType = () => {
  return (
    <RadioGroup.Root>
      <div className="grid grid-cols-2 gap-2 mt-2">
        <RadioGroup.Item
          value="income"
          className="group flex items-center justify-center p-4 bg-gray-700 gap-2 rounded-md data-[state=checked]:bg-green-300 data-[state=unchecked]:hover:bg-gray-600 "
        >
          <ArrowCircleUp
            className="text-green-300 group-data-[state]:text-white group-data-[state=unchecked]:text-green-300"
            size={24}
          />
          <span className="text-gray-300 group-data-[state=checked]:text-white group-data-[state=unchecked]:text-gray-300">
            Income
          </span>
        </RadioGroup.Item>

        <RadioGroup.Item
          value="outcome"
          className="group flex items-center justify-center p-4 bg-gray-700 gap-2 rounded-md data-[state=checked]:bg-red-300 data-[state=unchecked]:hover:bg-gray-600"
        >
          <ArrowCircleDown
            className="text-red-300 group-data-[state]:text-white group-data-[state=unchecked]:text-red-300"
            size={24}
          />
          <span className="text-gray-300 group-data-[state=checked]:text-white group-data-[state=unchecked]:text-gray-300">
            Outcome
          </span>
        </RadioGroup.Item>
      </div>
    </RadioGroup.Root>
  );
};

export default NewTransactionType;
