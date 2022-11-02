import React, { useState } from 'react'
import './ExpenseList.css'
import ExpenseItem from "./ExpenseItem"
import ExpensesFilter from './ExpensesFilter'
import ExpensesChart from './ExpensesChart'

const ExpenseList = props => {
  const [filteredYear, setFilteredYear] = useState('2020')

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear)
  }

  const filteredExpenses = props.expenses.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear
  })

  let expensesContent = <p>No expenses found.</p>

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map(expense =>  
      <ExpenseItem 
        key={expense.id}
        title={expense.title} 
        amount={expense.amount} 
        date={expense.date}
      />
    )
  }

  return (  
    <div>
    
      <div className="expenses">
        <ExpensesFilter 
          onChangeFilter={filterChangeHandler} 
          selected={filteredYear}  
        />
        <ExpensesChart expenses={filteredExpenses} />
        {expensesContent}
      </div>
    </div>
  )
}

export default ExpenseList