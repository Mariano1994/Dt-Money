import { zodResolver } from "@hookform/resolvers/zod";
import { MagnifyingGlass } from "phosphor-react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useTransactions } from "../contexts/TransactionsContext";

const searchFromSchema = z.object({
  query: z.string(),
});

type SearchFormInputs = z.infer<typeof searchFromSchema>;

const Searchbar = () => {
  const { getTransactions } = useTransactions();

  const {
    handleSubmit,
    register,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFromSchema),
  });

  async function handlerSearchTransitions(data: SearchFormInputs) {
    await getTransactions(data.query);
  }
  return (
    <form
      className="flex items-center gap-2 mt-16 "
      onSubmit={handleSubmit(handlerSearchTransitions)}
    >
      <input
        type="text"
        placeholder="Search for transactions..."
        className="flex-1 bg-gray-900 text-gray-300 p-4 rounded-md placeholder:text-gray-500 outline-none "
        {...register("query")}
      />
      <button
        type="submit"
        disabled={isSubmitting}
        className="group flex items-center gap-2 border border-solid p-[0.9rem] border-green-300 rounded-md outline-none transition-all hover:bg-green-300 focus:outline-green-300 disabled:opacity-25 disabled:cursor-not-allowed
      "
      >
        <MagnifyingGlass
          size={22}
          className="text-green-300 transition-all group-hover:text-white"
          weight="bold"
        />
        <span className="text-sm font-bold text-green-300 group-hover:text-white">
          Search
        </span>
      </button>
    </form>
  );
};

export default Searchbar;
