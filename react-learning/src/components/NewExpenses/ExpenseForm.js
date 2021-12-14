import React, {useState} from "react";

import './ExpenseForm.css'

const ExpenseForm = (props) => {

    const titleChangeHandler = (event) => {
        setUserInput((prevState) => {
            return {...prevState, enterTitle : event.target.value};
        });
    }

    const amountChangeHandler = (event) => {
        setUserInput((prevState) => {
            return {...prevState, enterAmount : event.target.value};
        });
    }

    const dateChangeHandler = (event) => {
        setUserInput((prevState) => {
            return {...prevState, enterDate : event.target.value};
        });
    }

    const submitClickHandler = (event) => {
        event.preventDefault();
        const expenseDate = {
            title : userInput.enterTitle,
            date : new Date(userInput.enterDate),
            price : userInput.enterAmount
        }
        props.onSaveExpenseData(expenseDate);
    }

    // const [enterTitle, setEnterTitle] = useState('');
    // const [enterAmount, setEnterAmount] = useState('');
    // const [enterDate, setEnterDate] = useState('');
    
    const [userInput, setUserInput] = useState({
        enterTitle: '',
        enterAmount: '',
        enterDate: ''
    });


    return <form onSubmit={submitClickHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type='text' onChange={titleChangeHandler}>
                </input>
            </div>

            <div className="new-expense__control">
                <label>Amount</label>
                <input type='number' min="0.01" step="0.01" onChange={amountChangeHandler}>
                </input>
            </div>

            <div className="new-expense__control">
                <label>Date</label>
                <input type='date' min="01-01-2019" max="2022-12-31" onChange={dateChangeHandler}>
                </input>
            </div>
        </div>
        <div className="new-expense__controls">
            <button type="submit"> Add Expense</button>
        </div>
    </form>
};


export default ExpenseForm;