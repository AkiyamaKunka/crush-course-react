import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    const saveExpenseDataHandler = (expenseData) => {
        console.log(expenseData);
        const expenseObject = {
            ...expenseData,
            id: Math.random().toString()
        };
        props.onCreateExpenseObject(expenseObject);
    };
    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>1
        </div>
    );
};

export default NewExpense;
