"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mysql_1 = __importDefault(require("mysql"));
const app = (0, express_1.default)();
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
app.get('/', (req, res) => {
    res.send('Hello, World!');
});
const port = 3012;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
