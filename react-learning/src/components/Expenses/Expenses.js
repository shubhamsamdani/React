import React, { useState } from 'react'
import './Expenses.css'
import Card from '../Card'
import ExpenseFilter from '../ExpensesFilter'
import ExpenseItem from './ExpenseItem'

const Expenses = (props) => {

    const [selectedYear, setSelectedYear] = useState('2020');
    const filteredList = props.item.filter((e) => e.date.getFullYear().toString() === selectedYear);
    const dropDownValueHandler = enteredYear => {
        console.log(enteredYear);
        setSelectedYear(enteredYear);
        console.log("selectedYear: " + selectedYear);
    }

    return (
      <Card className="expenses">
        <ExpenseFilter
          selected={selectedYear}
          onDropDownValueHandler={dropDownValueHandler}
        />
        {filteredList.length === 0 && <p>No Data for given year</p>}
        {filteredList.length > 0 && filteredList.map((expenses) => (
          <ExpenseItem
            key = {expenses.id}
            title={expenses.title}
            amount={expenses.amount}
            date={expenses.date}
          />
        ))}
      </Card>
    );
}

export default Expenses;