import ExpenseDate from './ExpenseDate';
import Card from '../Card';
import './ExpenseItem.css';
import React , {useState} from 'react';

function ExpenseItem(props) {
    const expDate = props.date;
    const amt = props.amount;
    const [expTitle, setExpTile] = useState(props.title);
    const clickHandler = () =>{
        console.log("Clicked");
        setExpTile("Updated");
        console.log(props.title);
    } 

    return (<Card className="expense-item">
        <ExpenseDate date = {expDate}></ExpenseDate>
        <div className="expense-item__description">
            <h2>{expTitle}</h2>
            <div className="expense-item__price">${amt}</div>
        </div>
        <button onClick = {clickHandler} >Change Title</button>
    </Card>);
}

export default ExpenseItem;