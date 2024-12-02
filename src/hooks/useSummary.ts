import { useTransactions } from "../contexts/TransactionsContext";

export const useSummary = () => {
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

  return summary;
};
