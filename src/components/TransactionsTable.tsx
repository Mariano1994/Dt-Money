const TransactionsTable = () => {
  return (
    <table className="w-[100%] max-w-[1120px] my-6 mx-auto py-0 border-spacing-y-2 border-separate ">
      <tbody className="text-gray-300">
        <tr className="bg-red-500 ">
          <td width="50%" className="py-5 px-8 bg-gray-700">
            {" "}
            Desenvolvimento do site
          </td>
          <td className="py-5 px-8 bg-gray-700 text-green-300"> $ 12.000,00</td>
          <td className="py-5 px-8 bg-gray-700"> Sell</td>
          <td className="py-5 px-8 bg-gray-700">13/05/2024</td>
        </tr>

        <tr className="bg-red-500 ">
          <td width="50%" className="py-5 px-8 bg-gray-700">
            {" "}
            Desenvolvimento do site
          </td>
          <td className="py-5 px-8 bg-gray-700 text-red-300"> $ -3.000,00</td>
          <td className="py-5 px-8 bg-gray-700"> Sell</td>
          <td className="py-5 px-8 bg-gray-700">13/05/2024</td>
        </tr>
      </tbody>
    </table>
  );
};

export default TransactionsTable;
