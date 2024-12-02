import { useTransactions } from "../contexts/TransactionsContext";

export const useSummary = () => {
  const { transactions } = useTransactions();
  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === "income") {
        acc.income += transaction.price;
      } else {
        acc.outcome += transaction.price;
      }

      acc.total = acc.income - acc.outcome;

      return acc;
    },
    {
      income: 0,
      outcome: 0,
      total: 0,
    }
  );

  return summary;
};
