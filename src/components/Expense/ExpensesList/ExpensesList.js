import './ExpensesList.css';
import ExpenseItem from "../ExpenseItem/ExpenseItem";

const ExpensesList = (props) => {
    if (props.item.length === 0) {
        return (
            <h2 className='expenses-list__fallback'>
                No Items Available.
            </h2>
        );
    }
    return (
        <ul className='expenses-list'>
            {props.item.map((expense) =>
                <ExpenseItem key={expense.id} item={expense}/>)}
        </ul>
    );
};

export default ExpensesList;