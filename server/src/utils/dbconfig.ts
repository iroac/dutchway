import mysql, { Connection } from 'mysql';

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

export default connection