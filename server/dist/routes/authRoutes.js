"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const middleware_1 = require("../middleware");
const authController_1 = require("../controllers/authController");
router.post('/login', authController_1.login);
router.post('/signup', middleware_1.userExists, authController_1.signup);
router.get('/logout', authController_1.logout);
module.exports = router;
