import connection from '../utils/dbconfig'
import { Request, Response } from 'express';

export const getallwords = async (req: Request, res: Response) => {
    const query = 'SELECT * FROM words'; 
  
     connection.query(query, (error, results) => {
      if (error) {
        console.error('Error fetching row:', error);
        res.status(500).json({ error: 'Failed to fetch row' });
        return
      }
       
       if (results.length === 0) {
        res.status(404).json({ error: 'Row not found' });
        return;
      } 
      
      res.json(results);
    });
     
  }
export const getwordbyid = async (req: Request, res: Response) => {
    const { id } = req.params;
    const query = 'SELECT * FROM words WHERE id = ?;'; 
  
     connection.query(query, [id], (error, results) => {
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
     
  }
