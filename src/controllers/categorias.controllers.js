import getConnection from "../db/database.js";

const getCamisetas = async (req, res) => {
  try {
    const connection = await getConnection();
<<<<<<< HEAD:src/controllers/categorias.controllers.js
    const result = await connection.query(
      "SELECT * FROM camisetas"
    );
=======
    const result = await connection.query("SELECT * FROM camisetas");
>>>>>>> 88b0daa (Avance proyecto-Registro de Usuarios):backend/src/controllers/categorias.controllers.js
    res.json(result);
  } catch (error) {
    console.error("Error al obtener las camisetas:", error);
    res.status(500).send("Error en el servidor");
  }
};

export const methodHTTP = {
  getCamisetas,
}