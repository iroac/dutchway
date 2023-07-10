"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// App Import 
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors")); // pass reqs to client localhost
const app = (0, express_1.default)();
// Login Import
const passport_1 = __importDefault(require("passport"));
const express_session_1 = __importDefault(require("express-session"));
const dbconfig_1 = __importDefault(require("./config/dbconfig"));
const passport_2 = require("./config/passport");
const MySQLStore = require('express-mysql-session')(express_session_1.default);
// Routes Import
const wordsRoutes = require('./routes/wordsRoutes');
const usersRoutes = require('./routes/usersRoutes');
const postsRoutes = require('./routes/postsRoutes');
const videosRoutes = require('./routes/videosRoutes');
const authRoutes = require('./routes/authRoutes');
// Middlewares 
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)({ origin: 'http://localhost:3004', credentials: true, methods: 'GET, POST, PUT, DELETE', allowedHeaders: 'Content-Type, Authorization' })); // enable cookies and sessions across domains}));
// Session and Passport Middlewares
app.use((0, express_session_1.default)({
    secret: 'aawiuhfawufhawhfaw',
    store: new MySQLStore({
        host: 'localhost',
        user: 'root',
        password: 'Joao1852@',
        database: 'dutchapp_db'
    }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24
    }
}));
app.use(passport_1.default.initialize());
app.use(passport_1.default.session());
passport_1.default.use(passport_2.strategy);
passport_1.default.serializeUser((user, done) => { console.log("inside serialize"); done(null, user.id); });
passport_1.default.deserializeUser(function (userId, done) { console.log('deserializeUser' + userId); dbconfig_1.default.query('SELECT * FROM users where id = ?', [userId], function (error, results) { done(null, results[0]); }); });
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
