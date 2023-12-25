import { hotelsModel } from '../modals/hotels.js';
export const hotelControllers = {
  createHotel: async (req, res, next) => {
    try {
      const newHotel = new hotelsModel(req.body);
      const savedHotel = await newHotel.save();
      res.status(201).json(savedHotel);
    } catch (err) {
      //   console.log(err);
      //   res.status(500).json(err);
      next();
    }
  },
  updateHotel: async (req, res, next) => {
    try {
      const { id } = req.params;
      const updatedHotel = await hotelsModel.findByIdAndUpdate(
        id,
        {
          $set: req.body,
        },
        { new: true } // will show updated document
      );
      res.status(200).json(updatedHotel);
    } catch (err) {
      next();
    }
  },
  deleteHotel: async (req, res, next) => {
    try {
      await hotelsModel.findByIdAndDelete(req.params.id);
      res.status(200).json('Hotel deleted successfully');
    } catch (err) {
      next();
    }
  },
  getHotel: async (req, res, next) => {
    try {
      const hotel = await hotelsModel.findById(req.params.id);
      res.status(200).json(hotel);
    } catch (err) {
      next();
    }
  },
  getAllHotels: async (req, res, next) => {
    try {
      const hotels = await hotelsModel.find(req.params.id);
      res.status(200).json(hotels);
    } catch (err) {
      next();
    }
  },
  getHotelsByCity: async (req, res, next) => {
    const cities = req.query.cities.split(',');
    try {
      const list = await Promise.all(
        cities.map((city) => {
          return hotelsModel.countDocuments({ city: city });
        })
      );
      res.status(200).json(list);
    } catch (err) {
      next();
    }
  },
  getHotelsByType: async (req, res, next) => {
    try {
      const hotels = await hotelsModel.find(req.params.id);
      res.status(200).json(hotels);
    } catch (err) {
      next();
    }
  },
};
