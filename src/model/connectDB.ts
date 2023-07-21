import { createConnection, Connection } from 'mysql2/promise';

const dbConfig = {
  host: 'b71odmgjtjhzrhhfenkd-mysql.services.clever-cloud.com',
  user: 'uiy9cq39l2phsb2h',
  password: 'Izj9v0YnEYkikHlE4xkb',
  port: 3306,
  database: 'b71odmgjtjhzrhhfenkd',
};
const dbLocal = {
  host: "localhost",
  user: "root",
  database: "manga"
}
const connectULR = "mysql://uiy9cq39l2phsb2h:Izj9v0YnEYkikHlE4xkb@b71odmgjtjhzrhhfenkd-mysql.services.clever-cloud.com:3306/b71odmgjtjhzrhhfenkd"
let connection: Connection;

const connectDB = async () => {
  try {
    connection = await createConnection(connectULR);
    // connection = await createConnection(dbLocal);

    console.log('Connected to MySQL');
  } catch (err) {
    console.error('Error connecting to MySQL:', err);
  }
};

export { connection, connectDB };
