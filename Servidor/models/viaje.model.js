import mongoose from "mongoose";

const viajeSchema = new mongoose.Schema(
  {
    origen: String,
    destino: String,
    fecha: Date,
    cantidadPasajeros: Number,
    precio: Number,
    cobrado: Boolean,
    observaciones: String,
    cliente: { type: mongoose.Schema.Types.ObjectId, ref: "Cliente" },
    vehiculo: { type: mongoose.Schema.Types.ObjectId, ref: "Vehiculo" },
    esTercerizado: Boolean,
  },
  { timestamps: true }
);

export default mongoose.model("Viaje", viajeSchema);
