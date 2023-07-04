import express, { Request, Response } from 'express';
import mysql, { Connection } from 'mysql';

const app = express();

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
 
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World!');
});  

const port = 3012;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});    