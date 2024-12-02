import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { useTransactions } from "../contexts/TransactionsContext";

const SummaryTransations = () => {
  const { transactions } = useTransactions();

  const summary = transactions.reduce(
    (c, transaction) => {
      if (transaction.type === "income") {
        c.income += transaction.price;
      } else {
        c.outcome += transaction.price;
      }

      c.total = c.income - c.outcome;

      return c;
    },
    {
      income: 0,
      outcome: 0,
      total: 0,
    }
  );

  return (
    <div className="flex gap-4 flex-col-reverse items-center justify-between -mt-20 md:flex-row">
      <div className="w-[340px] h-40 bg-gray-700 rounded-md shadow-md">
        <div className="flex items-start justify-between p-6">
          <div className="flex flex-col  gap-7">
            <span className=" text-gray-400">Incomes</span>
            <strong className="text-3xl font-bold">$ {summary.income}</strong>
          </div>
          <ArrowCircleUp size={30} className="text-green-300" />
        </div>
      </div>{" "}
      <div className="w-[340px] h-40 bg-gray-700 rounded-md shadow-md">
        <div className="flex items-start justify-between p-6">
          <div className="flex flex-col  gap-7">
            <span className=" text-gray-400">Outcomes</span>
            <strong className="text-3xl font-bold">$ {summary.outcome}</strong>
          </div>
          <ArrowCircleDown size={30} className="text-red-300" />
        </div>
      </div>{" "}
      <div className="w-[340px] h-40 bg-green-700 rounded-md shadow-md">
        <div className="flex items-start justify-between p-6">
          <div className="flex flex-col  gap-7">
            <span className=" text-gray-400">Total</span>
            <strong className="text-3xl font-bold">$ {summary.total}</strong>
          </div>
          <CurrencyDollar size={30} className="text-white" />
        </div>
      </div>{" "}
    </div>
  );
};

export default SummaryTransations;
