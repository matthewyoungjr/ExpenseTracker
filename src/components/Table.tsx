interface TableProps {
  onDelete?: () => void;
}

const Table = ({ onDelete }: TableProps) => {
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
            {/* row 1 */}
            <tr className="mb-3">
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
              <button onClick={onDelete} className="btn btn-error mb-2">
                Delete
              </button>
            </tr>
            {/* row 2 */}
            <tr className="mb-3">
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td>Purple</td>
              <button onClick={onDelete} className="btn btn-error mb-2">
                Delete
              </button>
            </tr>
            {/* row 3 */}
            <tr>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
              <button onClick={onDelete} className="btn btn-error mb-2">
                Delete
              </button>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
