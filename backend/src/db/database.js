import mysql from "mysql2/promise";
import config from "../config.js";

let connection;

const getConnection = async () => {
  if (!connection) {
    connection = await mysql.createConnection({
      host: config.host,
      user: config.user,
      password: config.password,
      database: config.database,
    });
  }
  return connection;
};

export default getConnection;
