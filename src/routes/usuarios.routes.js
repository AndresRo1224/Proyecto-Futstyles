import { Router } from "express";
<<<<<<< HEAD:src/routes/usuarios.routes.js
import { methodHTTP } from "../controllers/clientes.controllers.js"; // Importar el controlador

const router = Router();

// Ruta para obtener todos los clientes
router.get("/", methodHTTP.getClientes);
=======
import { registrarUsuario, iniciarSesion } from "../controllers/usuarios.controllers.js";

const router = Router();

router.post("/register", registrarUsuario);
router.post("/login", iniciarSesion);
>>>>>>> 88b0daa (Avance proyecto-Registro de Usuarios):backend/src/routes/usuarios.routes.js

export default router;