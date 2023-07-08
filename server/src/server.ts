import express, { Request, Response } from 'express';
import cors  from 'cors'; // pass reqs to the localhost:3001
import connection from './utils/dbconfig'
const app = express(); 
const wordsRoutes = require('./routes/wordsRoutes')
const usersRoutes = require('./routes/usersRoutes')

app.use(express.json());
app.use(cors({ origin: 'http://localhost:3003', credentials: true,  methods: 'GET, POST, PUT, DELETE',  allowedHeaders: 'Content-Type, Authorization' })) // enable cookies and sessions across domains}));
app.use('/api', wordsRoutes, usersRoutes)

// Posts Routes
app.get('/api/getposts/', async (req: Request, res: Response) => {
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
   
})
app.get('/api/getposts/:id',async (req: Request, res: Response) => {
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
})})
app.post('/api/addpost/', (req: Request, res: Response) => {
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
});

// Videos Routes
app.get('/api/getvideos/', async (req: Request, res: Response) => {
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
   
})
app.get('/api/getvideos/:id',async (req: Request, res: Response) => {
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
})})
app.post('/api/addvideo/', (req: Request, res: Response) => {
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
});

const port = 3012;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});     