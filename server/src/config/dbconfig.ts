import mysql, { Connection } from 'mysql';
require('dotenv').config();

const connection: Connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME, 
  });
  connection.query('SELECT 1 + 1', (error: mysql.MysqlError | null, results: any[]) => {
    if (error) {
      console.error('Error executing MySQL query:', error);
      return;
    }
    console.log('Results:', results);
  });

export default connection