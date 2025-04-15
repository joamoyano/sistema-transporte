import express from "express";
import {
  crearCliente,
  obtenerClientes,
  eliminarCliente,
} from "../controllers/cliente.controller.js";

const router = express.Router();

router.post("/", crearCliente);
router.get("/", obtenerClientes);
router.delete("/:id", eliminarCliente);

export default router;
