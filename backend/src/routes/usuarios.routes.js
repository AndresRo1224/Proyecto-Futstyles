import { Router } from "express";


import { registrarUsuario, iniciarSesion } from "../controllers/usuarios.controllers.js";

const router = Router();

router.post("/register", registrarUsuario);
router.post("/login", iniciarSesion);


export default router;