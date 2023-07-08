"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addVideo = exports.getVideoById = exports.getAllVideos = void 0;
const dbconfig_1 = __importDefault(require("../utils/dbconfig"));
const getAllVideos = (req, res) => {
    const query = 'SELECT * FROM content_video';
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
exports.getAllVideos = getAllVideos;
const getVideoById = (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM content_video WHERE id = ?';
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
exports.getVideoById = getVideoById;
const addVideo = (req, res) => {
    const { title, text, url, thumbnail } = req.body;
    const query = 'INSERT INTO content_video (title, text, url, thumbnail) VALUES (?, ?, ?, ?)';
    dbconfig_1.default.query(query, [title, text, url, thumbnail], (error, results) => {
        if (error) {
            console.error('Error inserting data:', error);
            res.status(500).json({ error: 'Failed to insert data' });
            return;
        }
        res.json({ message: 'Data inserted successfully' });
    });
};
exports.addVideo = addVideo;
