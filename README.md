🧠 DeFAI Guard – AI-Powered Fraud Detection for DeFi
🚀 Overview
DeFAI Guard is an AI-powered decentralized finance (DeFi) security solution that helps detect and prevent fraudulent crypto transactions in real time.
It combines blockchain smart contracts and machine learning intelligence to flag suspicious wallet interactions before they cause financial loss.
This project was built as part of a hackathon challenge to showcase how AI + Blockchain can improve trust and transparency in DeFi ecosystems.

🎯 Problem Statement
Decentralized Finance (DeFi) has revolutionized how financial transactions work — but with freedom comes risk.
Fraudulent transactions, wallet scams, and unauthorized fund transfers are increasing every day.
DeFAI Guard aims to detect anomalies in DeFi transactions before they’re confirmed on-chain, ensuring better safety for users and platforms.

💡 Solution Approach
Our system uses a combination of:
Smart Contracts for immutable, decentralized transaction logging.
AI Model / Heuristic Rules to analyze patterns in transactions.
Frontend Dashboard to visualize, test, and flag fraudulent activity.
When a transaction is checked, it passes through a fraud-detection logic that determines whether it is safe or suspicious, then gives an alert accordingly.

🧩 Project Structure
DeFAI-Guard/
│
├── backend/
│   ├── server.js          # Node.js + Express backend
│   ├── contract/          # Solidity smart contract
│   ├── routes/            # API endpoints
│   └── utils/             # Helper functions
│
├── frontend/
│   ├── src/
│   │   ├── App.js         # Main React app
│   │   ├── index.js       # Entry point
│   │   ├── components/    # UI components
│   │   ├── App.css        # Main styling
│   │   └── index.css      # Global theme
│   ├── public/
│   └── package.json
│
├── README.md
└── package.json

⚙️ Installation & Setup
1️⃣ Clone the repository
git clone https://github.com/Puneeth0911/DeFAI_React
cd DeFAI-Guard
2️⃣ Install dependencies for backend
cd backend
npm install
3️⃣ Run backend server
node server.js
The backend will run on http://localhost:5000
4️⃣ Setup frontend
cd ../frontend
npm install
npm start

The frontend will open at http://localhost:3000
💻 How to Use
Go to the Project Overview section on the frontend.
Enter:
Transaction amount
From wallet address
To wallet address
Click Check Transaction.
The system will analyze and show:
⚠️ Fraud Detected – if suspicious
✅ Safe Transaction – if normal
You can also use the Test Transaction section to try out different values and simulate fraud detection.

🧠 Technology Stack
Category	Tools Used
Frontend	React.js, CSS3
Backend	Node.js, Express.js
Blockchain	Solidity Smart Contract (Testnet)
AI / Logic	Heuristic Rules / Machine Learning-ready
Database	MongoDB (optional for storing flagged transactions)
🌐 Smart Contract Functionality
Logs all transactions into a decentralized ledger.
AI module (or rule-based system) evaluates risk factors.
Emits events for flagged transactions to alert users or admins.
Example function in Solidity:
function logTransaction(uint amount, bool isFraud) public {
    emit TransactionLogged(amount, isFraud);
}
🧾 Example Output
Amount	From Wallet	To Wallet	Result
5000	0xDEAD1234567890	0x5678EFGH1234	⚠️ Fraud Detected
250	0xABCDEF00112233	0x9999999999AA	✅ Safe Transaction
🎨 UI Features
Clean, gradient-themed React interface
Real-time fraud alerts
Footer branding and responsive design
Test Transaction sandbox for demo

🤝 Team & Contribution

Built with ❤️ by Puneeth and team for a DeFi Security Hackathon.
We welcome contributions!
Feel free to open issues or pull requests to improve DeFAI Guard.

🧩 Future Enhancements
Integrate live AI/ML model trained on blockchain datasets.
Add MetaMask wallet connection for real transaction testing.
Introduce fraud score (0–100%) visualization.
Store historical flagged data for analytics.

🧠 Demo Preview
A simple web dashboard to test and visualize fraudulent transaction detection.
🏁 Conclusion
DeFAI Guard demonstrates how Artificial Intelligence and Decentralized Finance can come together to make crypto ecosystems safer, smarter, and more transparent.

Contact Information:
Name: Puneeth Kumar & Team
Phone: 9399320400
Email: puneethnagalli3898@gmail.com
