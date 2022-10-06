import React, { useEffect, useState } from 'react'
import TransactionItem from "./TransactionItem";
import SearchForm from "./SearchForm";
import NewTransactionsForm from "./NewTransactionsForm";

const AccountConainer = () => {
    const [transaction, setTransaction] = useState([])
  const [query, setQuery] = useState("")
  useEffect(() => {
    fetch("http://localhost:6001/transactions?q="+query)
      .then((resp) => resp.json())
      .then(transaction => setTransaction(transaction))
  }, [query])
  function handleSearch(e) {
   setQuery(e.target.value)
  }
  return (
    <div>
      <SearchForm handleSearch={handleSearch} />
      <NewTransactionsForm />
      <TransactionItem transactions={transaction} />

  

    </div>
  )
}

export default AccountConainer
