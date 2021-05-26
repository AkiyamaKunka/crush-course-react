import './ExpenseForm.css';
import {useState} from "react";

const ExpenseForm = () => {
    const [enteredTitle, setEnteredTitle] = useState('');  // this is how useState() initialize
    const [enteredAmount, setEnteredAmount] = useState(''); // even number would be stored as string
    const [enteredDate, setEnteredDate] = useState('');
    const titleChangeHandler = (event) => setEnteredTitle(event.target.value);
    const amountChangeHandler = (event) => setEnteredAmount(event.target.value);
    const dateChangeHandler = (event) => setEnteredDate(event.target.value);
    return (
        <form>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input
                        type='text'
                        onChange={titleChangeHandler}
                        value={enteredTitle}
                    />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input
                        type='number'
                        min='0.01'
                        step='0.01'
                        onChange={amountChangeHandler}
                        value={enteredAmount}
                    />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input
                        type='date'
                        min='2019-01-01'
                        max='2022-12-31'
                        onChange={dateChangeHandler}
                        value={enteredDate}
                    />
                </div>
            </div>
        </form>
    );
};

export default ExpenseForm;