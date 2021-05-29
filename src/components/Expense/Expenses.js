import "./Expenses.css";
import './ExpenseItem/ExpenseItem';
import {useState} from "react";
import Card from '../UI/Card';
import ExpensesFilter from "./ExpensesFilter/ExpensesFilter";
import ExpensesList from "./ExpensesList/ExpensesList";
import NewExpense from "../NewExpense/NewExpense";
import ExpensesChart from "./ExpensesChart/ExpensesChart";

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2020');
    const createExpense = (expenseObject) => {
        props.onCreateExpense(expenseObject);
    };
    const selectedYearHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
        console.log("get selected year from expense components!" + selectedYear);
    };
    const filteredExpenses = props.item.filter(
        (expense) => expense.date.getFullYear().toString() === filteredYear
    );
    return (
        <div>
            <Card className='expenses'>
                <NewExpense onCreateExpense={createExpense}
                            selected={filteredYear}/>
                <ExpensesChart expenses={filteredExpenses}/>
                <ExpensesFilter onSelectedYear={selectedYearHandler}/>
                <ExpensesList item={filteredExpenses}/>
            </Card>
        </div>
    );
}

export default Expenses;