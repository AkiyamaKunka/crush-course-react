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
    const returnPreviewHandler = () => {
        props.onReturnPreview();
    }
    return (
        <div className='new-expense'>
            <ExpenseForm
                onSaveExpenseData={saveExpenseDataHandler}
                onReturnPreview={returnPreviewHandler}/>
        </div>
    );


};

export default NewExpense;
