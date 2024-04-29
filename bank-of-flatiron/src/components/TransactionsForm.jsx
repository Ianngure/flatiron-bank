import { useState } from "react";

function TransactionsForm({ addTransaction }) {
    const [date, setDate] = useState("")
    const [description, setDescription] = useState("")
    const [category, setCategory] = useState("")
    const [amount, setAmount] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        const newTransaction = {
            date,
            description,
            category,
            amount,
        }
        addTransaction(newTransaction)
    }

    return (
        <div className="transaction_form">
            <h2>Add New Transaction</h2>
            <form onSubmit={handleSubmit}>
                <label>Date</label>
                <input 
                type="date" 
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                />

                <label>Description</label>
                <input 
                type="text" 
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                />

                <label>Category</label>
                <input 
                type="category" 
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                />

                <label>Amount</label>
                <input 
                type="number" 
                id="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                />

                <button type="submit">Add Transaction</button>
            </form>
        </div>
    );
}

export default TransactionsForm;