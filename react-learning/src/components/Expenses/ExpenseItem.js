import ExpenseDate from './ExpenseDate';
import Card from '../Card';
import './ExpenseItem.css';
import React from 'react';

function ExpenseItem(props) {
    const expDate = props.date;
    const amt = props.amount;
    //const [expTitle, setExpTile] = useState(props.title); 

    return (<Card className="expense-item">
        <ExpenseDate date = {expDate}></ExpenseDate>
        <div className="expense-item__description">
            <h2>{props.title}</h2>
            <div className="expense-item__price">${amt}</div>
        </div>
    </Card>);
}

export default ExpenseItem;