import NewTransactionType from "./NewTransactionType";

const NewTransactionForm = () => {
  return (
    <form className="mt-8 flex flex-col gap-4 ">
      <input
        type="text"
        placeholder="Description"
        required
        className="rounded-md bg-gray-900 text-gray-300 p-4 outline-none focus:outline-green-500 "
      />
      <input
        type="number"
        placeholder="Price"
        required
        className="rounded-md bg-gray-900 text-gray-300 p-4 outline-none focus:outline-green-500 "
      />
      <input
        type="text"
        placeholder="Category"
        required
        className="rounded-md bg-gray-900 text-gray-300 p-4 outline-none focus:outline-green-500"
      />

      <NewTransactionType />
      <button
        type="submit"
        className="h-14 bg-green-500 text-white font-bold py-0 px-5 rounded-md outline-none mt-6 focus:outline-green-500 hover:brightness-90"
      >
        {" "}
        Create{" "}
      </button>
    </form>
  );
};

export default NewTransactionForm;
