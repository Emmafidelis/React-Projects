import { useState } from "react";
import "./App.css";
import ExpenseForm from "./components/expenseTracker/components/ExpenseForm";
import ExpenseList from "./components/expenseTracker/components/ExpenseList";
import ExpenseFilter from "./components/expenseTracker/components/ExpenseFilter";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");

  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 50, category: "Utilities" },
    { id: 2, description: "bbb", amount: 60, category: "Utilities" },
    { id: 3, description: "ccc", amount: 70, category: "Utilities" },
    { id: 4, description: "ddd", amount: 50, category: "Utilities" },
  ]);

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <>
      <div className="mb-5">
        <ExpenseForm
          onSubmit={(expense) =>
            setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        />
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) =>
          setExpenses(expenses.filter((expense) => expense.id !== id))
        }
      />
    </>
  );
}

export default App;
