import { useForm } from "react-hook-form";
import NewTransactionType from "./NewTransactionType";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const NewTransactionFormSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  // type: z.enum(["income", "outcome"]),
});

type NewTransactionFormInputs = z.infer<typeof NewTransactionFormSchema>;

const NewTransactionForm = () => {
  const {
    handleSubmit,
    register,
    formState: { isSubmitting },
  } = useForm<NewTransactionFormInputs>({
    resolver: zodResolver(NewTransactionFormSchema),
  });

  async function handlerSubmiteNewTransaction(data: NewTransactionFormInputs) {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);
  }

  return (
    <form
      onSubmit={handleSubmit(handlerSubmiteNewTransaction)}
      className="mt-8 flex flex-col gap-4 "
    >
      <input
        type="text"
        placeholder="Description"
        required
        className="rounded-md bg-gray-900 text-gray-300 p-4 outline-none focus:outline-green-500 "
        {...register("description")}
      />
      <input
        type="number"
        placeholder="Price"
        required
        className="rounded-md bg-gray-900 text-gray-300 p-4 outline-none focus:outline-green-500 "
        {...register("price", {
          valueAsNumber: true,
        })}
      />
      <input
        type="text"
        placeholder="Category"
        required
        className="rounded-md bg-gray-900 text-gray-300 p-4 outline-none focus:outline-green-500"
        {...register("category")}
      />

      <NewTransactionType />
      <button
        disabled={isSubmitting}
        type="submit"
        className="h-14 bg-green-500 text-white font-bold py-0 px-5 rounded-md outline-none mt-6 focus:outline-green-500 hover:brightness-90 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {" "}
        Create{" "}
      </button>
    </form>
  );
};

export default NewTransactionForm;
