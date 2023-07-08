"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors")); // pass reqs to the localhost:3001
const dbconfig_1 = __importDefault(require("./utils/dbconfig"));
const app = (0, express_1.default)();
const wordsRoutes = require('./routes/wordsRoutes');
const usersRoutes = require('./routes/usersRoutes');
app.use(express_1.default.json());
app.use((0, cors_1.default)({ origin: 'http://localhost:3003', credentials: true, methods: 'GET, POST, PUT, DELETE', allowedHeaders: 'Content-Type, Authorization' })); // enable cookies and sessions across domains}));
app.use('/api', wordsRoutes, usersRoutes);
// Posts Routes
app.get('/api/getposts/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
}));
app.get('/api/getposts/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
}));
app.post('/api/addpost/', (req, res) => {
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
});
// Videos Routes
app.get('/api/getvideos/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
}));
app.get('/api/getvideos/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
}));
app.post('/api/addvideo/', (req, res) => {
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
});
const port = 3012;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
