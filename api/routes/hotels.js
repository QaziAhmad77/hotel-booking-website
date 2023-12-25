import express from 'express';
const router = express.Router();
import { hotelControllers } from '../Controllers/hotels.js';
import { verifyAdmin, verifyUser } from '../utils/verifyToken.js';

router.post('/create-hotel', verifyAdmin, hotelControllers.createHotel);
router.put('/update-hotel/:id', verifyAdmin, hotelControllers.updateHotel);
router.delete('/delete-hotel/:id', verifyAdmin, hotelControllers.deleteHotel);
router.get('/get-hotel/:id', hotelControllers.getHotel);
router.get('/get-all-hotels', hotelControllers.getAllHotels);
router.get('/get-all-hotelsCountByCity', hotelControllers.getHotelsByCity);
router.get('/get-all-hotelsCountByType', hotelControllers.getHotelsByType);

export default router;
