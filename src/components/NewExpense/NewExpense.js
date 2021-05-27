import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    const saveExpenseDataHandler = (expenseData) => {
        const expenseObject = {
            ...expenseData,
            id: Math.random().toString()
        };
        props.onCreateExpense(expenseObject);
    };
    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
        </div>
    );
};

export default NewExpense;
