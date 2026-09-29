const mongoose = require("mongoose");

const pedidoSchema = new mongoose.Schema({

    cliente: {
        type: String,
        required: true
    },
    productos: [
        {
            nombre: String,
            precio: Number,
            cantidad: Number
        }
    ],
    total: {
        type: Number,
        required: true
    },
    estado: {
        type: String,
        default: "Pendiente"
    },
    fecha: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Pedido", pedidoSchema);