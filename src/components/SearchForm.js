import React,{useState, useEffect} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faSearch} from "@fortawesome/free-solid-svg-icons"
export default function SearchForm(){
    const [transaction, setTransaction] = useState([])
const [query, setQuery] = useState("")

useEffect(() => {

    fetch("http://localhost:6001/transactions?q=" + query)
      .then((resp) => resp.json())
      .then(transaction => setTransaction(transaction))
  }, [query])

function handleSearch(event){
    setQuery(event.target.value)
}

    return (
            <form id="search-form">
                <input id="search" handleSearch={handleSearch} placeholder="Search Transanctions..." type={"text"}/>
                <button><FontAwesomeIcon icon={faSearch}/></button>
            </form>
    )
}