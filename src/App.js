import Expenses from "./components/Expenses/Expenses";
import "./components/NewExpense/NewExpense";
import NewExpense from "./components/NewExpense/NewExpense";
import React, { useState } from "react";

const App = () => {
  const DUMMY_EXPENSES = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2021, 7, 4),
    },
    {
      id: "e2",
      title: "New Tv",
      amount: 799.67,
      date: new Date(2021, 2, 12),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      const latestExpense = [expense, ...prevExpenses];
      console.log(latestExpense);
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses}></Expenses>
    </div>
  );
};

export default App;
