"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const postsController_1 = require("../controllers/postsController");
router.get('/getposts', postsController_1.getAllPosts);
router.get('/getposts/:id', postsController_1.getPostById);
router.post('/addpost', postsController_1.addPost);
module.exports = router;
