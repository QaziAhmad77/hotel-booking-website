import express from 'express';
const router = express.Router();
import { roomControllers } from '../Controllers/rooms.js';
import { verifyAdmin } from '../utils/verifyToken.js';

router.post('/create-room/:hotelId', verifyAdmin, roomControllers.createRoom);
router.put('/update-room/:id', verifyAdmin, roomControllers.updateRoom);
router.delete(
  '/delete-room/:id/:hotelId',
  verifyAdmin,
  roomControllers.deleteRoom
);
router.get('/get-room/:id', roomControllers.getRoom);
router.get('/get-all-rooms', roomControllers.getAllRooms);

export default router;
