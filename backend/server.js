const express = require("express");
const cors = require("cors");
const { detectFraud } = require("./fraudModel");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/check-transaction", (req, res) => {
  const transaction = req.body; // { amount, fromWallet, toWallet }
  const result = detectFraud(transaction);
  res.json({ fraud: result });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
