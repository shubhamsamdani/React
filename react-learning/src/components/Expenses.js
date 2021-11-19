import './Expenses.css'
import Card from './Card'
import ExpenseItem from './ExpenseItem'

function Expenses(props){

    return(
        <Card className = "expenses">
            <ExpenseItem
                title={props.item.title}
                amount={props.item.amount}
                date={props.item.date}
            ></ExpenseItem>
        </Card>
    )
}

export default Expenses;