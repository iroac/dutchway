import express from 'express'
const router = express.Router();
import { getAllVideos, getVideoById, addVideo } from '../controllers/videosController'

router.get('/getvideos', getAllVideos);
router.get('/getvideos/:id', getVideoById);
router.post('addvideo', addVideo);

module.exports = router