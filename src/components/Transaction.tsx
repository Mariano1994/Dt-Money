import { dateFormatter, priceFomatter } from "../utils/formmaters";
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
        {transaction.type === "outcome" && "- "}
        {priceFomatter.format(transaction.price)}
      </td>
      <td className="py-5 px-8 bg-gray-700"> {transaction.category}</td>
      <td className="py-5 px-8 bg-gray-700 rounded-br-md rounded-tr-md">
        {dateFormatter.format(new Date(transaction.createdAt))}
      </td>
    </tr>
  );
};

export default Transaction;
