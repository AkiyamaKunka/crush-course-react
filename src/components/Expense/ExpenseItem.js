import './ExpenseItem.css';
import './ExpenseDate';
import ExpenseDate from "./ExpenseDate";
import Card from '../UI/Card';
import {useState} from "react";

function ExpenseItem(props) {
    const [title, setTitle] = useState(props.item.title);
    const clickHandler = () => {
        setTitle('Updated!');
        console.log(title);
    }
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.item.date}/>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${props.item.amount}</div>
            </div>
            <button onClick={clickHandler} className='expense-item'>Hi!</button>
        </Card>
    );
}

export default ExpenseItem;