import { useState, useEffect } from "react";
import data from "../data/appData";
import Header from "./Header";
import Transactions from "./Transactions"
import TransactionsForm from "./TransactionsForm";
import Footer from "./Footer";

function App() {
    const [transactions, setTransactions] = useState([])

    // Fetch Transactions
    useEffect(() => {
        fetch("https://transactions-api-psi.vercel.app/transactions")
            .then(resp => resp.json())
            .then(data => setTransactions(data))
    }, [])

    // Add New Transaction
    function addTransaction(transaction) {
        setTransactions([...transactions, transaction])
    }

    return (
        <>
        <Header name={data.name} logo={data.logo}/>
        <TransactionsForm addTransaction={addTransaction}/>
        <Transactions transactions={transactions}/>
        <Footer copyright={data.copyright}/>
        </>
    );
}

export default App;