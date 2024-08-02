import { Router } from 'express';
import { BfhlController } from '../controllers/bfhlController';

const router = Router();
const bfhlController = new BfhlController();

router.post('/bfhl', bfhlController.handlePostRequest);
router.get('/bfhl', bfhlController.handleGetRequest);

export default router;