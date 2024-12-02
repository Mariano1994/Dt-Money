import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { priceFomatter } from "../utils/formmaters";
import { useSummary } from "../hooks/useSummary";

const SummaryTransations = () => {
  const summary = useSummary();

  return (
    <div className="flex gap-4 flex-col-reverse items-center justify-between -mt-20 md:flex-row">
      <div className="w-[340px] h-40 bg-gray-700 rounded-md shadow-md">
        <div className="flex items-start justify-between p-6">
          <div className="flex flex-col  gap-7">
            <span className=" text-gray-400">Incomes</span>
            <strong className="text-3xl font-bold">
              {priceFomatter.format(summary.income)}
            </strong>
          </div>
          <ArrowCircleUp size={30} className="text-green-300" />
        </div>
      </div>{" "}
      <div className="w-[340px] h-40 bg-gray-700 rounded-md shadow-md">
        <div className="flex items-start justify-between p-6">
          <div className="flex flex-col  gap-7">
            <span className=" text-gray-400">Outcomes</span>
            <strong className="text-3xl font-bold">
              {priceFomatter.format(summary.outcome)}
            </strong>
          </div>
          <ArrowCircleDown size={30} className="text-red-300" />
        </div>
      </div>{" "}
      <div className="w-[340px] h-40 bg-green-700 rounded-md shadow-md">
        <div className="flex items-start justify-between p-6">
          <div className="flex flex-col  gap-7">
            <span className=" text-gray-400">Total</span>
            <strong className="text-3xl font-bold">
              {priceFomatter.format(summary.total)}
            </strong>
          </div>
          <CurrencyDollar size={30} className="text-white" />
        </div>
      </div>{" "}
    </div>
  );
};

export default SummaryTransations;
