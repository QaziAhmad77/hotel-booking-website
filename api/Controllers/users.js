import { usersModel } from '../modals/users.js';
export const userControllers = {
  updateUser: async (req, res, next) => {
    try {
      const { id } = req.params;
      const updatedUser = await usersModel.findByIdAndUpdate(
        id,
        {
          $set: req.body,
        },
        { new: true } // will show updated document
      );
      res.status(200).json(updatedUser);
    } catch (err) {
      next();
    }
  },
  deleteUser: async (req, res, next) => {
    try {
      await usersModel.findByIdAndDelete(req.params.id);
      res.status(200).json('User deleted successfully');
    } catch (err) {
      next();
    }
  },
  getUser: async (req, res, next) => {
    try {
      const user = await usersModel.findById(req.params.id);
      res.status(200).json(user);
    } catch (err) {
      next();
    }
  },
  getAllUsers: async (req, res, next) => {
    try {
      const users = await usersModel.find(req.params.id);
      res.status(200).json(users);
    } catch (err) {
      next();
    }
  },
};
