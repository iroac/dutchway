import express from 'express'
const router = express.Router();
import { getUserById, updateUserById } from '../controllers/usersController'
import { isAuthMiddleware } from '../middleware';

router.get('/getuser/:id', isAuthMiddleware, getUserById);
router.put('/updateuser/:id', isAuthMiddleware, updateUserById);

module.exports = router