import express from 'express';
const router = express.Router();
import { userControllers } from '../Controllers/users.js';
import { verifyAdmin, verifyToken, verifyUser } from '../utils/verifyToken.js';

// router.get('/checkauthentication', verifyToken, (req, res) => {
//   res.send('Hello you are logged in');
// });
// router.get('/checkuser/:id', verifyUser, (req, res) => {
//   res.send('Hello you are logged in and you can delete your account');
// });
// router.get('/checkadmin/:id', verifyAdmin, (req, res) => {
//   res.send(
//     'Hello Admin you are logged in and you can all delete your accounts'
//   );
// });
router.put('/update-user/:id', verifyUser, userControllers.updateUser);
router.delete('/delete-user/:id', verifyUser, userControllers.deleteUser);
router.get('/get-user/:id', verifyUser, userControllers.getUser);
router.get('/get-all-users', verifyAdmin, userControllers.getAllUsers);

export default router;
