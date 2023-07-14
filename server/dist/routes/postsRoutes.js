"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const postsController_1 = require("../controllers/postsController");
const middleware_1 = require("../middleware");
router.get('/getposts', middleware_1.isAuthMiddleware, postsController_1.getAllPosts);
router.get('/getposts/:id', middleware_1.isAuthMiddleware, postsController_1.getPostById);
router.post('/addpost', middleware_1.isAuthMiddleware, postsController_1.addPost);
module.exports = router;
