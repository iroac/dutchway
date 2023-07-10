"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = __importDefault(require("mysql"));
const connection = mysql_1.default.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Joao1852@',
    database: 'dutchapp_db',
});
connection.query('SELECT 1 + 1', (error, results) => {
    if (error) {
        console.error('Error executing MySQL query:', error);
        return;
    }
    console.log('Results:', results);
});
exports.default = connection;
