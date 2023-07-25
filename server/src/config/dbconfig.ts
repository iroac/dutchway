import mysql, { Connection } from 'mysql';
require('dotenv').config();

const connection: Connection = mysql.createConnection(`mysql:${process.env.DATABASE_URL}`);
  connection.query('SELECT 1 + 1', (error: mysql.MysqlError | null, results: any[]) => {
    if (error) {
      console.error('Error executing MySQL query:', error);
      return;
    }
    console.log('Results:', results);
  });

export default connection