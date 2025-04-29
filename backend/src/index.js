import express from "express";
import cors from "cors";
import usuariosRoutes from "./routes/usuarios.routes.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Necesario para procesar JSON en req.body

// Rutas
app.use("/api/usuarios", usuariosRoutes);

// Iniciar el servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});