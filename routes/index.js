// routes/index.js
import express from 'express';
import {
  renderHome,
  renderBlocks,
  renderTransactionForm,
  addTransaction,
  mineBlock,
  validateChain
} from '../controllers/blockchainController.js';

const router = express.Router();

router.get('/', renderHome);
router.get('/blocks', renderBlocks);
router.get('/transaction', renderTransactionForm);
router.post('/transaction', addTransaction);
router.get('/mine', mineBlock);
router.get('/validate', validateChain);

export default router;