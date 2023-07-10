import connection from '../config/dbconfig'
import { Request, Response } from 'express';


export const getAllPosts = (req: Request, res: Response) => {
    const query = 'SELECT * FROM content_post'; 
  
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

export const getPostById = (req: Request, res: Response) => {
    const {id} = req.params;
    const query = 'SELECT * FROM content_post WHERE id = ?';
  
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

export const addPost = (req: Request, res: Response) => {
    const { title, text, category} = req.body;
    const query = 'INSERT INTO content_post (title, text, category) VALUES (?, ?, ?)';
    connection.query(query, [title, text, category], (error, results) => {
      if (error) {
        console.error('Error inserting data:', error);
        res.status(500).json({ error: 'Failed to insert data' });
        return;
      }
      res.json({ message: 'Data inserted successfully' });
    });
  };