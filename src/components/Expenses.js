import "./Expenses.css";
import './ExpenseItem';
import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
    return (
        <div className='expenses'>
            <ExpenseItem item={props.item[0]}/>
            <ExpenseItem item={props.item[1]}/>
            <ExpenseItem item={props.item[2]}/>
            <ExpenseItem item={props.item[3]}/>
        </div>
    );
}


export default Expenses;