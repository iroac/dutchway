import express from 'express'
const router = express.Router();
import { getAllPosts, getPostById, addPost } from '../controllers/postsController'
import { isAuthMiddleware } from '../middleware';

router.get('/getposts', isAuthMiddleware, getAllPosts);
router.get('/getposts/:id', isAuthMiddleware, getPostById);
router.post('/addpost', isAuthMiddleware, addPost);

module.exports = router