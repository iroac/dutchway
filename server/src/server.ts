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
 

// enable cookies and sessions across domains;
app.use(cors({ origin: 'http://localhost:3002', credentials: true,  methods: 'GET, POST, PUT, DELETE',  allowedHeaders: 'Content-Type, Authorization' })) // enable cookies and sessions across domains}));




app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World!');
});  

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



const port = 3012;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});     