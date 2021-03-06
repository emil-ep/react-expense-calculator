import "./ExpenseForm.css";
import React, { useState } from "react";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  //   const [userState, setUserState] = useState({
  //     title: "",
  //     amount: "",
  //     date: "",
  //   });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setUserState((prevState) => {
    //   return {
    //     ...prevState,
    //     title: event.target.value,
    //   };
    // });
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserState((prevState) => {
    //   return {
    //     ...prevState,
    //     amount: event.target.value,
    //   };
    // });
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserState((prevState) => {
    //   return {
    //     ...prevState,
    //     date: event.target.value,
    //   };
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    if (enteredDate !== "") {
      props.onSaveExpenseData(expenseData);
      setEnteredTitle("");
      setEnteredAmount("");
      setEnteredDate("");
    }
  };

  const cancelClickHandler = () => {
    props.onCancelExpenseEntry();
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          ></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={cancelClickHandler}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
