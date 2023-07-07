import express, { Request, Response } from 'express';
import mysql, { Connection } from 'mysql';
import cors  from 'cors'; // pass reqs to the localhost:3001
const app = express(); 

// Mysql Connection
const connection: Connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Joao1852@',
  database: 'dutchapp_db', 
});
connection.query('SELECT 1 + 1', (error: mysql.MysqlError | null, results: any[]) => {
  if (error) {
    console.error('Error executing MySQL query:', error);
    return;
  }
  console.log('Results:', results);
});
 

app.use(express.json());

// enable cookies and sessions across domains;
app.use(cors({ origin: 'http://localhost:3002', credentials: true,  methods: 'GET, POST, PUT, DELETE',  allowedHeaders: 'Content-Type, Authorization' })) // enable cookies and sessions across domains}));




app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World!');
});  

// Words Routes
app.get('/api/getwords/', async (req: Request, res: Response) => {
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
   
})
app.get('/api/getwords/:id', async (req: Request, res: Response) => {
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
   
})

// Users Routes
app.get('/api/getuser/:id',async (req: Request, res: Response) => {
  const {id} = req.params;
  const query = 'SELECT * FROM users WHERE id = ?';

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
app.put('/api/updateuser/:id', (req: Request, res: Response) => {
  const { id } = req.params; // Get the ID from the request parameters
  const { wordsLearned, currentlyWords } = req.body; // Get the updated column values from the request body

  const query = 'UPDATE users SET currentlyWords = ?, wordsLearned = ? WHERE id = ?';  

  // Execute the MySQL query with the updated data and ID
  connection.query(query, [currentlyWords, wordsLearned, id], (error, results) => {
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
});

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