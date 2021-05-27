import "./Expenses.css";
import './ExpenseItem';
import {useState} from "react";
import ExpenseItem from "./ExpenseItem";
import NewExpense from "../NewExpense/NewExpense";
import Card from '../UI/Card';
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";

function Expenses(props) {

    const [filteredYear, setFilteredYear] = useState('2020');
    const createExpense = (expenseObject) => {
        props.onCreateExpense(expenseObject);

    }
    const selectedYearHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
        console.log("get selected year from expense components!" + selectedYear);
    }
    return (
        <div>
            <NewExpense onCreateExpense={createExpense} selected={filteredYear}/>
            <Card className='expenses'>
                <ExpensesFilter onSelectedYear={selectedYearHandler}/>
                {props.item.map((expense) => <ExpenseItem key={expense.id} item={expense}/>)}
            </Card>
        </div>
    );
}

export default Expenses;