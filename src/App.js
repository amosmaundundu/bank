import './App.css';
import AccountConainer from './components/AccountConainer';
import NewTransactionsForm from './components/NewTransactionsForm';
import SearchForm from './components/SearchForm';
import Transactions from './components/Transactions';
// import "semantic-ui-css"

function App() {
  return (
    <div className="ui raise segment">
      <div className='header-text'>
        <h2>The Royal Bank of Flatiron</h2>
      </div>
      
      <AccountConainer />
      
    </div>
  );
}

export default App;
