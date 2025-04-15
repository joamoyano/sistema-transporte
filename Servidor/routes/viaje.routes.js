import express from "express";
import {
  crearViaje,
  obtenerViajes,
  eliminarViaje,
} from "../controllers/viaje.controller.js";

const router = express.Router();

router.post("/", crearViaje);
router.get("/", obtenerViajes);
router.delete("/:id", eliminarViaje);

export default router;
