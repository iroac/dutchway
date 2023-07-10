"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userExists = exports.isAuth = exports.genPassword = exports.validPassword = void 0;
const dbconfig_1 = __importDefault(require("./config/dbconfig"));
const crypto_1 = __importDefault(require("crypto"));
function validPassword(password, hash, salt) {
    const hashVerify = crypto_1.default.pbkdf2Sync(password, salt, 10000, 60, 'sha512').toString('hex');
    return hash === hashVerify;
}
exports.validPassword = validPassword;
function genPassword(password) {
    const salt = crypto_1.default.randomBytes(32).toString('hex');
    const genhash = crypto_1.default.pbkdf2Sync(password, salt, 10000, 60, 'sha512').toString('hex');
    return { salt: salt, hash: genhash };
}
exports.genPassword = genPassword;
function isAuth(req, res, next) {
    if (req.isAuthenticated()) {
        next();
    }
    else {
        res.redirect('/login');
    }
}
exports.isAuth = isAuth;
function userExists(req, res, next) {
    dbconfig_1.default.query('Select * from users where email=? ', [req.body.email], function (error, results, fields) {
        if (error) {
            console.log(error);
        }
        else if (results.length > 0) {
            res.redirect('/signup');
        }
        else {
            next();
        }
    });
}
exports.userExists = userExists;
