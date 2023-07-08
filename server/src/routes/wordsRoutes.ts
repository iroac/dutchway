import express from 'express'
const router = express.Router();
import { getallwords, getwordbyid } from '../controllers/wordsController'

router.get('/getwords', getallwords)
router.get('/getwords/:id', getwordbyid)

module.exports = router