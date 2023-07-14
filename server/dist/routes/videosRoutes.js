"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const videosController_1 = require("../controllers/videosController");
const middleware_1 = require("../middleware");
router.get('/getvideos', middleware_1.isAuthMiddleware, videosController_1.getAllVideos);
router.get('/getvideos/:id', middleware_1.isAuthMiddleware, videosController_1.getVideoById);
router.post('addvideo', middleware_1.isAuthMiddleware, videosController_1.addVideo);
module.exports = router;
