import React, { useState } from "react"

import './NewExpense.css'

const NewExpense = props => {
  const [enteredTitle, setEnteredTitle] = useState('')
  const [enteredAmount, setEnteredAmount] = useState('')
  const [enteredDate, setEnteredDate] = useState('')
  // const [userInput, setUserInput] = useState({
  //   title: '',
  //   amount: '',
  //   date: ''
  // })

  const titleChangeHandler = (evt) => {
    setEnteredTitle(evt.target.value)
  }

  const amountChangeHandler = (evt) => {
    setEnteredAmount(evt.target.value)
  }
  
  const dateChangeHandler = (evt) => {
    setEnteredDate(evt.target.value)
  }

  const submitHandler = (evt) => {
    evt.preventDefault()

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate)
    }
    props.addExpenseHandler(expenseData)
    setEnteredTitle('')
    setEnteredAmount('')
    setEnteredDate('')
  }

  return ( 
    <div className="new-expense"> 
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input 
              type="text"
              value={enteredTitle}
              onChange={titleChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input 
              type="number" 
              min="0.01" 
              step="0.01" 
              value={enteredAmount}
              onChange={amountChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input 
              type="date" 
              min="2020-01-01" 
              max="2022-12-31"
              value={enteredDate}
              onChange={dateChangeHandler}
              />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  )
}

export default NewExpense;