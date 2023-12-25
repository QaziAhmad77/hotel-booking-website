import express from 'express';
const router = express.Router();
import authRoutes from './auth.js';
import hotelsRoutes from './hotels.js';
import roomsRoutes from './rooms.js';
import usersRoutes from './users.js';

router.use('/auth', authRoutes);
router.use('/hotels', hotelsRoutes);
router.use('/rooms', roomsRoutes);
router.use('/users', usersRoutes);

export default router;
