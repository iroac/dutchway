"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const videosController_1 = require("../controllers/videosController");
router.get('/getvideos', videosController_1.getAllVideos);
router.get('/getvideos/:id', videosController_1.getVideoById);
router.post('addvideo', videosController_1.addVideo);
module.exports = router;
