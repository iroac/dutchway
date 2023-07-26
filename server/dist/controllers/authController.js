"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAuth = exports.logout = exports.login = exports.signup = void 0;
const dbconfig_1 = __importDefault(require("../config/dbconfig"));
const middleware_1 = require("../middleware");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
require('dotenv').config();
const signup = (req, res, next) => {
    const saltHash = (0, middleware_1.genPassword)(req.body.password);
    const salt = saltHash.salt;
    const hash = saltHash.hash;
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
    const sql = "SELECT * FROM users WHERE email = ?";
    dbconfig_1.default.query(sql, [req.body.email, req.body.password], (err, data) => {
        if (err)
            return res.json({ message: 'Server side error', error: err });
        const isValid = (0, middleware_1.validPassword)(req.body.password, data[0].hash, data[0].salt);
        if (data.length > 0 && isValid) {
            const email = data[0].email;
            const userId = data[0].id;
            const token = jsonwebtoken_1.default.sign({ email, id: userId }, `${process.env.JWT_SECRET}`, { expiresIn: '1d' });
            res.cookie('token', token, { sameSite: 'none' });
            return res.json({ Status: 'Success', userId: userId });
        }
        else {
            return res.json({ message: 'No authorized' });
        }
    });
};
exports.login = login;
const logout = (req, res) => {
    res.clearCookie('token');
    return res.json({ Status: 'Success' });
};
exports.logout = logout;
function isAuth(req, res) {
    const token = req.cookies.token;
    if (!token) {
        return res.json({ message: "User not authenticated " });
    }
    else {
        jsonwebtoken_1.default.verify(token, `${process.env.JWT_SECRET}`, (err, decoded) => {
            if (err) {
                return res.json({ message: "User not authenticated", error: err });
            }
            else {
                res.send(decoded);
            }
        });
    }
}
exports.isAuth = isAuth;
