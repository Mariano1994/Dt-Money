import { TransactionsPros } from "./TransactionsTable";

interface TransactionProps {
  transaction: TransactionsPros;
}

const Transaction = ({ transaction }: TransactionProps) => {
  return (
    <tr key={transaction.id}>
      <td
        width="50%"
        className="py-5 px-8 bg-gray-700 rounded-bl-md rounded-tl-md"
      >
        {" "}
        {transaction.description}
      </td>
      <td
        className={`py-5 px-8 bg-gray-700 ${
          transaction.type === "income" ? "text-green-300" : "text-red-300"
        } `}
      >
        {" "}
        $ {transaction.price}
      </td>
      <td className="py-5 px-8 bg-gray-700"> {transaction.category}</td>
      <td className="py-5 px-8 bg-gray-700 rounded-br-md rounded-tr-md">
        13/05/2024
      </td>
    </tr>
  );
};

export default Transaction;
