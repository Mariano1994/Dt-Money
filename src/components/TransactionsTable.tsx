import { useEffect, useState } from "react";
import Transaction from "./Transaction";

export interface TransactionsPros {
  id: number;
  description: string;
  category: string;
  type: "income" | "outcome";
  price: number;
  createdAt: Date;
}

const TransactionsTable = () => {
  const [transactios, setTransactios] = useState<TransactionsPros[]>([]);
  async function getTransactions() {
    const transactionData = await fetch("http://localhost:3000/transactions");
    const transactions = await transactionData.json();

    setTransactios(transactions);
  }
  useEffect(() => {
    getTransactions();
  }, [transactios]);

  return (
    <table className="w-[100%] max-w-[1120px] my-6 mx-auto py-0 border-spacing-y-2 border-separate ">
      <tbody className="text-gray-300">
        {transactios.map((transaction) => (
          <Transaction transaction={transaction} key={transaction.id} />
        ))}
      </tbody>
    </table>
  );
};

export default TransactionsTable;
