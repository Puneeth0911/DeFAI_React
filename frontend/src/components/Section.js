import React, { useState } from "react";
import axios from "axios";

const Section = ({ title, content }) => {
  const [tx, setTx] = useState({ amount: 0, fromWallet: "", toWallet: "" });
  const [result, setResult] = useState("");

  const handleCheck = async () => {
    const res = await axios.post("http://localhost:5000/api/check-transaction", tx);
    setResult(res.data.fraud ? "⚠ Fraud Detected!" : "✅ Transaction Safe");
  };

  return (
    <section>
      <h2>{title}</h2>
      <div>{content}</div>

      {/* Simple form to test transactions */}
      <div style={{ marginTop: "15px" }}>
        <input
          type="number"
          placeholder="Amount"
          value={tx.amount}
          onChange={(e) => setTx({ ...tx, amount: parseInt(e.target.value) })}
        />
        <input
          type="text"
          placeholder="From Wallet"
          value={tx.fromWallet}
          onChange={(e) => setTx({ ...tx, fromWallet: e.target.value })}
        />
        <input
          type="text"
          placeholder="To Wallet"
          value={tx.toWallet}
          onChange={(e) => setTx({ ...tx, toWallet: e.target.value })}
        />
        <button onClick={handleCheck}>Check Transaction</button>
      </div>

      {result && <p style={{ marginTop: "10px", fontWeight: "bold" }}>{result}</p>}
    </section>
  );
};

export default Section;
