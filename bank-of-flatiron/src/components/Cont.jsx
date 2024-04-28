import React,{useEffect , useState} from "react"
import List from "./List";
import Search from "./Search"
import Form from "./Form"



function AccountContainer() {
    const [transaction, setTransaction] = useState([])
    const [query, setQuery] = useState("")
    useEffect(() => {
      fetch("http://localhost:8001/transactions?q=" + query)
        .then((resp) => resp.json())
        .then(transaction => setTransaction(transaction))
    }, [query])
    function handleSearch(e) {
      setQuery(e.target.value)
    }
    return (
      <div>
        <Search handleSearch={handleSearch} />
        <AddTransactionForm />
        <TransactionsList transactions={transaction} />
      </div>
    );
  }

  export default Cont ;