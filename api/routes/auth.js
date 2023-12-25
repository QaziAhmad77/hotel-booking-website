import express from 'express';
const router = express.Router();
import { authControllers } from '../Controllers/auth.js';

router.post('/register', authControllers.register);
router.post('/login', authControllers.login);

export default router;
