"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addPost = exports.getPostById = exports.getAllPosts = void 0;
const dbconfig_1 = __importDefault(require("../config/dbconfig"));
const getAllPosts = (req, res) => {
    const query = 'SELECT * FROM content_post';
    dbconfig_1.default.query(query, (error, results) => {
        if (error) {
            console.error('Error fetching row:', error);
            res.status(500).json({ error: 'Failed to fetch row' });
            return;
        }
        if (results.length === 0) {
            res.status(404).json({ error: 'Row not found' });
            return;
        }
        res.json(results);
    });
};
exports.getAllPosts = getAllPosts;
const getPostById = (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM content_post WHERE id = ?';
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
exports.getPostById = getPostById;
const addPost = (req, res) => {
    const { title, text, category } = req.body;
    const query = 'INSERT INTO content_post (title, text, category) VALUES (?, ?, ?)';
    dbconfig_1.default.query(query, [title, text, category], (error, results) => {
        if (error) {
            console.error('Error inserting data:', error);
            res.status(500).json({ error: 'Failed to insert data' });
            return;
        }
        res.json({ message: 'Data inserted successfully' });
    });
};
exports.addPost = addPost;
