import express from 'express'
const router = express.Router();
import { getUserById, updateUserById } from '../controllers/usersController'

router.get('/getuser/:id', getUserById);
router.put('/updateuser/:id', updateUserById);

module.exports = router