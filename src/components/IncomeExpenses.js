import {useContext} from 'react'
import {GlobalContext} from '../Context/GlobalState'
const IncomeExpenses = () => {
   const {transactions} = useContext(GlobalContext);
   const amounts = transactions.map(transaction=>transaction.amount)
   const income = amounts.filter(amt=>amt>0).reduce((acc,item)=>acc+=item,0)
   const expense = amounts.filter(amt=>amt<0).reduce((acc,item)=>acc+=item,0)
    return (
        <div className='inc-exp-container'>
           <div>
              <h4>Income</h4>
              <p id='money-plus' className='money plus'>${income.toFixed(2)}</p> 
           </div> 
           <div>
              <h4>Expense</h4>
              <p id='money-minus' className='money minus'>${Math.abs(expense).toFixed(2)}</p> 
           </div>
        </div>
    )
}

export default IncomeExpenses
