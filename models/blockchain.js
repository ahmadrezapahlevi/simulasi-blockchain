export let blockchain = [];
export let pendingTransactions = [];

export const addTransactionToPool = (sender, recipient, amount) => {
  pendingTransactions.push({ sender, recipient, amount });
};

export const mineNewBlock = () => {
  const newBlock = {
    index: blockchain.length + 1,
    timestamp: new Date(),
    transactions: [...pendingTransactions],
    previousHash: blockchain.length ? blockchain[blockchain.length - 1].hash : '0',
    hash: Math.random().toString(36).substring(7)
  };
  blockchain.push(newBlock);
  pendingTransactions.length = 0;
};