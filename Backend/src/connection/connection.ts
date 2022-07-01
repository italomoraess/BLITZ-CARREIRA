import mysql from 'mysql2/promise';

const connection = mysql.createPool({
   host: 'localhost',
   user: 'root',
   password: '123456',
   database: 'TODO_LIST',
   port: 3002,
});

export default connection;