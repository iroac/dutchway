import express from 'express'
const router = express.Router();
import { getAllPosts, getPostById, addPost } from '../controllers/postsController'

router.get('/getposts', getAllPosts);
router.get('/getposts/:id', getPostById);
router.post('/addpost', addPost);

module.exports = router