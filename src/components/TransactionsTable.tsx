import Transaction from "./Transaction";
import { useTransactions } from "../contexts/TransactionsContext";

export interface TransactionsPros {
  id: number;
  description: string;
  category: string;
  type: "income" | "outcome";
  price: number;
  createdAt: Date;
}

const TransactionsTable = () => {
  const { transactions } = useTransactions();

  return (
    <table className="w-[100%] max-w-[1120px] my-6 mx-auto py-0 border-spacing-y-2 border-separate ">
      <tbody className="text-gray-300">
        {transactions.map((transaction) => (
          <Transaction transaction={transaction} key={transaction.id} />
        ))}
      </tbody>
    </table>
  );
};

export default TransactionsTable;
