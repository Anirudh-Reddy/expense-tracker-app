import React,{useContext} from 'react'
import {GlobalContext} from '../Context/GlobalState'
const Transaction = ({transaction}) => {
    const {deleteTransaction} = useContext(GlobalContext)
    let sign = transaction.amount>0 ? '+' :''
    return (
        <li className={transaction.amount>0?'plus':'minus' }>
                   {transaction.text}<span>{sign}${transaction.amount}</span>
                   <button className='delete-btn' onClick={()=>deleteTransaction(transaction.id)}>x</button>
       </li>
    )
}

export default Transaction
