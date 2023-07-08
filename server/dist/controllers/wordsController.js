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
exports.getwordbyid = exports.getallwords = void 0;
const dbconfig_1 = __importDefault(require("../utils/dbconfig"));
const getallwords = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const query = 'SELECT * FROM words';
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
});
exports.getallwords = getallwords;
const getwordbyid = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const query = 'SELECT * FROM words WHERE id = ?;';
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
});
exports.getwordbyid = getwordbyid;
