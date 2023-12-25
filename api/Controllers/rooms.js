import { roomsModel } from '../modals/rooms.js';
import { hotelsModel } from '../modals/hotels.js';
export const roomControllers = {
  createRoom: async (req, res, next) => {
    const hotelId = req.params.hotelId;
    const newRoom = new roomsModel(req.body);
    try {
      const savedRoom = await newRoom.save();
      try {
        await hotelsModel.findByIdAndUpdate(hotelId, {
          $push: { rooms: savedRoom._id },
        });
      } catch (err) {
        next(err);
      }
      res.status(200).json(savedRoom);
    } catch (err) {
      next(err);
    }
  },
  updateRoom: async (req, res, next) => {
    try {
      const { id } = req.params;
      const updatedRoom = await roomsModel.findByIdAndUpdate(
        id,
        {
          $set: req.body,
        },
        { new: true } // will show updated document
      );
      res.status(200).json(updatedRoom);
    } catch (err) {
      next();
    }
  },
  deleteRoom: async (req, res, next) => {
    const hotelId = req.params.hotelId;
    try {
      await roomsModel.findByIdAndDelete(req.params.id);
      try {
        await hotelsModel.findByIdAndUpdate(hotelId, {
          $pull: { rooms: req.params.id },
        });
      } catch (err) {
        next(err);
      }
      res.status(200).json('Room deleted successfully');
    } catch (err) {
      next();
    }
  },
  getRoom: async (req, res, next) => {
    try {
      const room = await roomsModel.findById(req.params.id);
      res.status(200).json(room);
    } catch (err) {
      next();
    }
  },
  getAllRooms: async (req, res, next) => {
    try {
      const rooms = await roomsModel.find(req.params.id);
      res.status(200).json(rooms);
    } catch (err) {
      next();
    }
  },
};
