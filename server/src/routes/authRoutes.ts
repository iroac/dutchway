import express from 'express'
const router = express.Router();
import { userExists} from '../middleware'
import { signup, login, logout, isAuth } from '../controllers/authController'

router.post('/login', login)
router.post('/signup', userExists, signup);
router.get('/logout', logout) 
router.get('/auth', isAuth)

module.exports = router