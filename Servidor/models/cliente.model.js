import mongoose from "mongoose";

const clienteSchema = new mongoose.Schema(
  {
    nombre: String,
    tipo: String, // 'particular', 'empresa', etc.
    contacto: String,
    telefono: String,
    email: String,
  },
  { timestamps: true }
);

export default mongoose.model("Cliente", clienteSchema);
