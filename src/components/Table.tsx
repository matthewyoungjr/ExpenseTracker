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
  if (expenses.length === 0) return null;
  return (
    <>
      <div className="overflow-x-auto mx-auto">
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
          <tfoot>
            <tr>
              <td>Total</td>
              <td>
                $
                {expenses
                  .reduce((acc, curr) => acc + curr.amount, 0)
                  .toFixed(2)}
              </td>
              <td></td>
              <td></td>
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  );
};

export default Table;
