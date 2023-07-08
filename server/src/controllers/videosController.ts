import connection from '../utils/dbconfig'
import { Request, Response } from 'express';

export const getAllVideos = (req: Request, res: Response) => {
    const query = 'SELECT * FROM content_video'; 
  
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

export const getVideoById = (req: Request, res: Response) => {
    const {id} = req.params;
    const query = 'SELECT * FROM content_video WHERE id = ?';
  
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
  })}
  
export const addVideo = (req: Request, res: Response) => {
    const { title, text, url, thumbnail } = req.body;
    const query = 'INSERT INTO content_video (title, text, url, thumbnail) VALUES (?, ?, ?, ?)';
    connection.query(query, [title, text, url, thumbnail], (error, results) => {
      if (error) {
        console.error('Error inserting data:', error);
        res.status(500).json({ error: 'Failed to insert data' });
        return;
      }
      res.json({ message: 'Data inserted successfully' });
    });
  };