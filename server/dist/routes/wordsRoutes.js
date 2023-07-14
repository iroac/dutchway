"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const wordsController_1 = require("../controllers/wordsController");
const middleware_1 = require("../middleware");
router.get('/getwords', middleware_1.isAuthMiddleware, wordsController_1.getallwords);
router.get('/getwords/:id', middleware_1.isAuthMiddleware, wordsController_1.getwordbyid);
module.exports = router;
