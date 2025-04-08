import { Router } from "express";
import { methodHTTP as CategoriaController } from "../controllers/categorias.controllers.js";
const router = Router();

/*Configurar respuesta desde el server metodo http get*/
router.get("/", CategoriaController.getcategorias);

/*hacemos disponible al router para toda la aplicacion*/
export default router;
