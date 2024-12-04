import { Controller, useForm } from "react-hook-form";
import * as RadioGroup from "@radix-ui/react-radio-group";
import NewTransactionType from "./NewTransactionType";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowCircleDown, ArrowCircleUp } from "phosphor-react";

const NewTransactionFormSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  type: z.enum(["income", "outcome"]),
});

type NewTransactionFormInputs = z.infer<typeof NewTransactionFormSchema>;

const NewTransactionForm = () => {
  const {
    control,
    handleSubmit,
    register,
    formState: { isSubmitting },
  } = useForm<NewTransactionFormInputs>({
    resolver: zodResolver(NewTransactionFormSchema),
    defaultValues: {
      type: "income",
    },
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

      <Controller
        control={control}
        name="type"
        render={({ field }) => {
          return (
            <RadioGroup.Root onValueChange={field.onChange} value={field.value}>
              <div className="grid grid-cols-2 gap-2 mt-2">
                <RadioGroup.Item
                  value="income"
                  className="group flex items-center justify-center p-4 bg-gray-700 gap-2 rounded-md data-[state=checked]:bg-green-300 data-[state=unchecked]:hover:bg-gray-600 "
                >
                  <ArrowCircleUp
                    className="text-green-300 group-data-[state=checked]:text-white group-data-[state=unchecked]:text-green-300"
                    size={24}
                  />
                  <span className="text-gray-300 group-data-[state=checked]:text-white group-data-[state=unchecked]:text-gray-300">
                    Income
                  </span>
                </RadioGroup.Item>

                <RadioGroup.Item
                  value="outcome"
                  className="group flex items-center justify-center p-4 bg-gray-700 gap-2 rounded-md data-[state=checked]:bg-red-300 data-[state=unchecked]:hover:bg-gray-600"
                >
                  <ArrowCircleDown
                    className="text-red-300 group-data-[state=checked]:text-white group-data-[state=unchecked]:text-red-300"
                    size={24}
                  />
                  <span className="text-gray-300 group-data-[state=checked]:text-white group-data-[state=unchecked]:text-gray-300">
                    Outcome
                  </span>
                </RadioGroup.Item>
              </div>
            </RadioGroup.Root>
          );
        }}
      />

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
