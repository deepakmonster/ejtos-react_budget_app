import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget,currency,dispatch } = useContext(AppContext);
    const [budget_new, setBudgetnew] = useState(budget);
    const { expenses } = useContext(AppContext);

    const changeBudget = (val)=>{
        setBudgetnew(val);
        if(budget_new >= 20000){
            alert("Budget allocation cannot exceed 20000");
            setBudgetnew("");
            return;
        }
        const totalExpenses = expenses.reduce((total, item) => {
            return (total += item.cost);
        }, 0);

        if(budget_new <= totalExpenses){
                alert("you cannot reduce budget value lower than spending");
                return;
        }
        dispatch({
            type: 'SET_BUDGET',
            payload: val,
        })
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}<input value={budget_new} name="budget_1" type="number" step="10" min="0" max="20000" required="required"  onChange={event=>changeBudget(event.target.value)} ></input></span>
        </div>
    );
};
export default Budget;


