const Form = () => {
  return (
    <div>
      <form>
        <div className="mb-3">
          <label className="block mb-2" htmlFor="description">
            Description
          </label>
          <input
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
          <select className="select select-bordered w-full max-w-xs">
            <option disabled selected>
              Category
            </option>
            <option>Groceries</option>
            <option>Utilities</option>
            <option>Entertainment</option>
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
