import mongoose from "mongoose";

const vehiculoSchema = new mongoose.Schema(
  {
    descripcion: String,
    capacidad: Number,
    propietario: String, // 'propio', 'socio', 'alquilado', etc.
    dominio: String,
    habilitado: Boolean,
  },
  { timestamps: true }
);

export default mongoose.model("Vehiculo", vehiculoSchema);
