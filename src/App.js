import './App.css';
import Header from './components/Header'
import  Balance from './components/Balance'
import  IncomeExpenses from './components/IncomeExpenses'
import  TranscationList from './components/TranscationList'
import  AddTransaction from './components/AddTransaction'
function App() {
  return (
    <div className="App">
     <Header />
      <div className='container'>
        <Balance/>
        <IncomeExpenses/>
        <TranscationList/>
        <AddTransaction/>
      </div>
    </div>
  );
}

export default App;
