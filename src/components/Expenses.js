import "./Expenses.css";
import './ExpenseItem';
import ExpenseItem from "./ExpenseItem";

import Card from './Card';

function Expenses(props) {
    return (
        <Card className='expenses'>
            <ExpenseItem item={props.item[0]}/>
            <ExpenseItem item={props.item[1]}/>
            <ExpenseItem item={props.item[2]}/>
            <ExpenseItem item={props.item[3]}/>
        </Card>
    );
}


export default Expenses;