"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserById = exports.getUserById = void 0;
const dbconfig_1 = __importDefault(require("../config/dbconfig"));
const getUserById = (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM users WHERE id = ?';
    dbconfig_1.default.query(query, [id], (error, results) => {
        if (error) {
            console.error('Error fetching row:', error);
            res.status(500).json({ error: 'Failed to fetch row' });
            return;
        }
        if (results.length === 0) {
            res.status(404).json({ error: 'Row not found' });
            return;
        }
        res.json(results[0]);
    });
};
exports.getUserById = getUserById;
const updateUserById = (req, res) => {
    const { id } = req.params; // Get the ID from the request parameters
    const { wordsLearned, currentlyWords } = req.body; // Get the updated column values from the request body
    const query = 'UPDATE users SET currentlyWords = ?, wordsLearned = ? WHERE id = ?';
    // Execute the MySQL query with the updated data and ID
    dbconfig_1.default.query(query, [currentlyWords, wordsLearned, id], (error, results) => {
        if (error) {
            console.error('Error updating row:', error);
            res.status(500).json({ error: 'Failed to update row' });
            return;
        }
        // Check if any rows were affected
        if (results.affectedRows === 0) {
            res.status(404).json({ error: 'Row not found' });
            return;
        }
        // Row updated successfully
        res.json(results[0]);
    });
};
exports.updateUserById = updateUserById;
