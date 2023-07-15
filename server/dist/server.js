"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors")); // pass reqs to client localhost
const wordsRoutes = require('./routes/wordsRoutes');
const usersRoutes = require('./routes/usersRoutes');
const postsRoutes = require('./routes/postsRoutes');
const videosRoutes = require('./routes/videosRoutes');
const authRoutes = require('./routes/authRoutes');
const cookieParser = require('cookie-parser');
const app = (0, express_1.default)();
const helmet = require('helmet');
// Middlewares             
app.use(helmet({ contentSecurityPolicy: false }));
app.use(cookieParser());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)({ origin: 'http://localhost:3000', credentials: true, methods: 'GET, POST, PUT, DELETE', allowedHeaders: 'Content-Type, Authorization' })); // enable cookies and sessions across domains}));
app.use('/api', wordsRoutes, usersRoutes, postsRoutes, videosRoutes, authRoutes);
// Error handling
app.use((err, req, res, next) => {
    const { statusCode = 500, message = 'Something went wrong' } = err;
    res.status(statusCode).send(message);
});
const port = 3012;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
