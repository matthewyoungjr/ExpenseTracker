import "./App.css";
import Filter from "./components/Filter";
import Form from "./components/Form";
import Table from "./components/Table";
import { useState } from "react";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 2000, category: "Utilities" },
    { id: 2, description: "aab", amount: 2000, category: "Utilities" },
    { id: 3, description: "aac", amount: 2000, category: "Utilities" },
    { id: 4, description: "Milk", amount: 2000, category: "Utilities" },
  ]);

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;
  return (
    <>
      <Form />
      <Filter onSelectCategory={(cat) => setSelectedCategory(cat)} />
      <Table
        expenses={visibleExpenses}
        onDelete={(id) =>
          setExpenses(expenses.filter((expense) => expense.id !== id))
        }
      />
    </>
  );
}

export default App;
