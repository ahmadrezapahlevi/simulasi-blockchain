import { blockchain, pendingTransactions, addTransactionToPool, mineNewBlock } from '../models/blockchain.js';

export const renderHome = (req, res) => {
  res.render('home', { title: 'Home' });
};

export const renderBlocks = (req, res) => {
  res.render('blocks', { blockchain, title: 'Blocks' });
};

export const renderTransactionForm = (req, res) => {
  res.render('transaction', { title: 'New Transaction' });
};

export const addTransaction = (req, res) => {
  const { sender, recipient, amount } = req.body;
  addTransactionToPool(sender, recipient, amount);
  res.redirect('/transaction');
};

export const mineBlock = (req, res) => {
  mineNewBlock();
  res.redirect('/blocks');
};

export const validateChain = (req, res) => {
  const isValid = true; // Dummy logic
  res.render('validate', { isValid, title: 'Validate' });
};