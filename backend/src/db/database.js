import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();  // Carga las variables del archivo .env

let connection;

const getConnection = async () => {
  if (!connection) {
    connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });
    console.log("Conectado a la base de datos");
  }
  return connection;
};

export default getConnection;
