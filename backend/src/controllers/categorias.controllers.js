import getConnection from "../db/database.js";

const getCamisetas = async (req, res) => {
  try {
    const connection = await getConnection();
    const [rows] = await connection.query("SELECT * FROM camisetas");
    res.json(rows);
  } catch (error) {
    console.error("Error al obtener las camisetas:", error);
    res.status(500).send("Error en el servidor");
  }
};

export const methodHTTP = {
  getCamisetas,
};
