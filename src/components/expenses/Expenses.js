import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import React, { useState } from "react";

const Expenses = (props) => {
  const [yearFilter, setYearFilter] = useState("2020");

  const yearFilterChangeHandler = (selectedYear) => {
    setYearFilter(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={yearFilter}
          onYearSelected={yearFilterChangeHandler}
        />
        {props.items.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
