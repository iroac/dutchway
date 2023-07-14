import express from 'express'
const router = express.Router();
import { getAllVideos, getVideoById, addVideo } from '../controllers/videosController'
import { isAuthMiddleware } from '../middleware';

router.get('/getvideos', isAuthMiddleware, getAllVideos);
router.get('/getvideos/:id', isAuthMiddleware, getVideoById);
router.post('addvideo', isAuthMiddleware, addVideo);

module.exports = router