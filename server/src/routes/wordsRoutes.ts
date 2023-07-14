import express from 'express'
const router = express.Router();
import { getallwords, getwordbyid } from '../controllers/wordsController'
import { isAuthMiddleware } from '../middleware';

router.get('/getwords', isAuthMiddleware, getallwords)
router.get('/getwords/:id', isAuthMiddleware, getwordbyid)

module.exports = router