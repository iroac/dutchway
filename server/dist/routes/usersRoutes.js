"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const usersController_1 = require("../controllers/usersController");
const middleware_1 = require("../middleware");
router.get('/getuser/:id', middleware_1.isAuthMiddleware, usersController_1.getUserById);
router.put('/updateuser/:id', middleware_1.isAuthMiddleware, usersController_1.updateUserById);
module.exports = router;
