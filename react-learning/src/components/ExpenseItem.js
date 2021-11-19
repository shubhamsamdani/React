import ExpenseDate from './ExpenseDate';
import Card from './Card';
import './ExpenseItem.css';

function ExpenseItem(props) {
    const expDate = props.date;
    const expTitle = props.title;
    const amt = props.amount;

    return (<Card className="expense-item">
        <ExpenseDate date = {expDate}></ExpenseDate>
        <div className="expense-item__description">
            <h2>{expTitle}</h2>
            <div className="expense-item__price">${amt}</div>
        </div>
    </Card>);
}

export default ExpenseItem;