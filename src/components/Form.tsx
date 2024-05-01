import { useForm } from "react-hook-form";

const Form = () => {
  const { register, handleSubmit } = useForm();
  return (
    <div>
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <div className="mb-3">
          <label className="block mb-2" htmlFor="description">
            Description
          </label>
          <input
            {...register("description", { required: true })}
            id="description"
            type="text"
            placeholder="Description"
            className="input input-bordered w-full max-w-xs"
          />
        </div>

        <div className="mb-3">
          <label className="block mb-2" htmlFor="amount">
            Amount
          </label>
          <input
            {...register("amount", { required: true })}
            id="amount"
            type="number"
            placeholder="Amount"
            className="input input-bordered w-full max-w-xs"
          />
        </div>

        <div>
          <label className="block mb-2" htmlFor="category">
            Category
          </label>
          <select
            {...register("category", { required: true })}
            className="select select-bordered w-full max-w-xs"
          >
            <option disabled selected>
              Category
            </option>
            <option value="Groceries">Groceries</option>
            <option value="Utilities">Utilities</option>
            <option value="Entertainment">Entertainment</option>
          </select>
        </div>

        <button className="btn btn-primary mt-5" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
