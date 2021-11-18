import './ExpenseItem.css';

function ExpenseItem() {
    const expDate = new Date(2021,2,28);
    const expTitle = 'D-Mart';
    const amt = 284.45;
    return (<div className="expense-item">
        <div>{expDate.toDateString()}</div>
        <div className="expense-item__description">
            <h2>{expTitle}</h2>
            <div className="expense-item__price">${amt}</div>
        </div>
    </div>);
}

export default ExpenseItem;