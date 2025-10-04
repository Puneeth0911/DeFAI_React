// Mock AI fraud detection logic
function detectFraud(tx) {
  // Example: simple rules
  if (tx.amount > 10000) return true; // large transactions flagged
  if (tx.fromWallet.startsWith("0xDEAD")) return true; // suspicious wallet
  return false;
}

module.exports = { detectFraud };
