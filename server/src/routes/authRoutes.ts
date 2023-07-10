import express from 'express'
const router = express.Router();
import { userExists} from '../middleware'
import { signup, login, logout } from '../controllers/authController'

router.post('/login', login)
router.post('/signup', userExists, signup);
router.get('/logout', logout) 

module.exports = router