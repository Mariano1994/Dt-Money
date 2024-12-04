import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../lib/axios";

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
  getTransactions: (query?: string) => Promise<void>;
}

export const TransactioinsContext = createContext({} as ContextProps);

export function TransactionsContextProvider({ children }: ChildrenPros) {
  const [transactions, setTransactions] = useState<TransactionsPros[]>([]);

  async function getTransactions(query?: string) {
    const response = await api.get("transactions", {
      params: {
        _sort: "createdAt",
        _order: "desc",
        q: query,
      },
    });

    setTransactions(response.data);
  }

  useEffect(() => {
    getTransactions();
  }, []);

  return (
    <TransactioinsContext.Provider value={{ transactions, getTransactions }}>
      {children}
    </TransactioinsContext.Provider>
  );
}

export function useTransactions() {
  return useContext(TransactioinsContext);
}
