import { createContext, useContext, useEffect, useState } from "react";

interface ChildrenPros {
  children: React.ReactNode;
}

export interface TransactionsPros {
  id: number;
  description: string;
  category: string;
  type: "income" | "outcome";
  price: number;
  createdAt: Date;
}

interface ContextProps {
  transactions: TransactionsPros[];
}

export const TransactioinsContext = createContext({} as ContextProps);

export function TransactionsContextProvider({ children }: ChildrenPros) {
  const [transactions, setTransactions] = useState<TransactionsPros[]>([]);

  async function getTransactions() {
    const transactionData = await fetch("http://localhost:3000/transactions");
    const transactions = await transactionData.json();

    setTransactions(transactions);
  }
  useEffect(() => {
    getTransactions();
  }, [transactions]);

  return (
    <TransactioinsContext.Provider value={{ transactions }}>
      {children}
    </TransactioinsContext.Provider>
  );
}

export function useTransactions() {
  return useContext(TransactioinsContext);
}
