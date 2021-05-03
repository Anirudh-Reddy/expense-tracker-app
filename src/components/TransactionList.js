import {useContext} from 'react'
import {GlobalContext} from '../Context/GlobalState'
import Transaction from './Transaction'
const TransactionList = () => {
    const {transactions} = useContext(GlobalContext);
    return (
        <div>
            <h3>History</h3>
            {transactions.length >0 ? <ul id='list' className='list'>
                {transactions.map(transaction=>(
                  <Transaction key={transaction.id} transaction={transaction}/>  
                ))}
            </ul> : 'No transactions found!!!'}
        </div>
    )
}

export default TransactionList
