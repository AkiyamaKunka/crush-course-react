import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";
import {useState} from "react";

const NewExpense = (props) => {
    const saveExpenseDataHandler = (expenseData) => {
        const expenseObject = {
            ...expenseData,
            id: Math.random().toString()
        };
        props.onCreateExpense(expenseObject);
    };
    const [showForm, setShowForm] = useState(false);
    const changeShowFromStatus = () => {
        setShowForm((prevShowForm) => !prevShowForm);
    }
    return (
        <div className='new-expense'>
            {!showForm && <button onClick={changeShowFromStatus}>Add Expense</button>}
            {showForm && <ExpenseForm
                onSaveExpenseData={saveExpenseDataHandler}
                onReturnPreview={changeShowFromStatus}/>
            }
        </div>
    );


};

export default NewExpense;
