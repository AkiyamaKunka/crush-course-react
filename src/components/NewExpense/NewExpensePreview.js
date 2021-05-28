import './ExpenseForm.css';
import '../Expense/Expenses.css'
import {useState} from "react";
import NewExpense from "./NewExpense";
import './NewExpense.css'


const NewExpensePreview = (props) => {
    const [isShowingForm, setIsShowingForm] = useState(false);
    const returnPreviewHandler = () => {
        setIsShowingForm(false);
    }
    const addNewExpenseHandler = () => {
        setIsShowingForm(true);
    }
    if (isShowingForm === false) {
        return (
            <div className='new-expense__actions new-expense'>
                <button onClick={addNewExpenseHandler}>Add New Expense</button>
            </div>
        )
    } else {
        return (
            <NewExpense
                onCreateExpense={props.onCreateExpense}
                selected={props.selected}
                onReturnPreview={returnPreviewHandler}
            />
        );
    }

}
export default NewExpensePreview;