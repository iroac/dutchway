"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.strategy = void 0;
const passport_local_1 = require("passport-local");
const middleware_1 = require("../middleware");
const dbconfig_1 = __importDefault(require("./dbconfig"));
const customFields = {
    usernameField: 'email',
    passwordField: 'password',
};
const verifyCallback = (email, password, done) => {
    dbconfig_1.default.query('SELECT * FROM users WHERE email = ? ', [email, password], (error, results, fields) => {
        if (error) {
            return done(error);
        }
        if (results.length === 0) {
            return done(null, false);
        }
        const isValid = (0, middleware_1.validPassword)(password, results[0].hash, results[0].salt);
        if (isValid) {
            return done(null, results[0]);
        }
        else {
            return done(null, false);
        }
    });
};
exports.strategy = new passport_local_1.Strategy(customFields, verifyCallback);
