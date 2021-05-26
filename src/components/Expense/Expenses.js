import "./Expenses.css";
import './ExpenseItem';
import ExpenseItem from "./ExpenseItem";
import NewExpense from "../NewExpense/NewExpense";
import Card from '../UI/Card';

function Expenses(props) {
    return (
        <Card className='expenses'>
            <NewExpense/>

            <ExpenseItem item={props.item[0]}/>
            <ExpenseItem item={props.item[1]}/>
            <ExpenseItem item={props.item[2]}/>
            <ExpenseItem item={props.item[3]}/>
        </Card>
    );
}


export default Expenses;