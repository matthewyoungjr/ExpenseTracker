interface Expense {
  id: number;
  description: string;
  amount: number;
  category: string;
}

interface TableProps {
  onDelete: (id: number) => void;
  expenses: Expense[];
}

const Table = ({ onDelete, expenses }: TableProps) => {
  return (
    <>
      <div className="mt-9 mb-5">
        <select className="select select-bordered w-full max-w-xs">
          <option disabled selected>
            All Categories
          </option>
          <option>Groceries</option>
          <option>Utilities</option>
          <option>Entertainment</option>
        </select>
      </div>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Description</th>
              <th>Amount</th>
              <th>Category</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* First Row */}
            {expenses.map((expense) => (
              <tr key={expense.id}>
                <td>{expense.description}</td>
                <td>{expense.amount}</td>
                <td>{expense.category}</td>
                <td>
                  <button
                    onClick={() => onDelete(expense.id)}
                    className="btn btn-error"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
