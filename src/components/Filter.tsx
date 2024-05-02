interface Props {
  onSelectCategory: (cat: string) => void;
}

const Filter = ({ onSelectCategory }: Props) => {
  return (
    <div className="mt-9 mb-5">
      <select
        className="select select-bordered w-full max-w-xs"
        onChange={(event) => onSelectCategory(event.target.value)}
      >
        <option value="">All Categories</option>
        <option value="Groceries">Groceries</option>
        <option value="Utilities">Utilities</option>
        <option value="Entertainment">Entertainment</option>
      </select>
    </div>
  );
};

export default Filter;
