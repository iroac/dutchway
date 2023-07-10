"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logout = exports.login = exports.signup = void 0;
const dbconfig_1 = __importDefault(require("../config/dbconfig"));
const middleware_1 = require("../middleware");
const passport = require('passport');
const signup = (req, res, next) => {
    const saltHash = (0, middleware_1.genPassword)(req.body.password);
    const salt = saltHash.salt;
    const hash = saltHash.hash;
    console.log(saltHash);
    dbconfig_1.default.query('Insert into users(f_name, l_name, email, wordsLearned, currentlyWords, hash, salt) values(?,?,?,?,?,?,?) ', [req.body.f_name, req.body.l_name, req.body.email, req.body.wordsLearned, req.body.currentlyWords, hash, salt], function (error, results, fields) {
        if (error) {
            console.log(error);
        }
        else {
            console.log("Successfully Entered");
        }
    });
    res.send('success');
};
exports.signup = signup;
const login = (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            return next(err);
        }
        if (!user) {
            // Authentication failed
            return res.status(401).send('Authentication failed');
        }
        // Authentication successful
        req.logIn(user, (err) => {
            if (err) {
                return next(err);
            }
            // Send a success response
            return res.send('Authentication successful');
        });
    })(req, res, next);
};
exports.login = login;
const logout = (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            // Handle any error that occurred during session destruction
            console.error(err);
            res.status(500).send('Error occurred during logout');
        }
        else {
            // Logout successful, redirect to the login page or send a success response
            res.send('Logout successful');
        }
    });
};
exports.logout = logout;
