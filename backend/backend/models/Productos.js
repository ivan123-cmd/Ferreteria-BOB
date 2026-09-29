const mongoose = require("mongoose");
const productosSchema = new mongoose.Schema({

    nombre: {
        type: String,
        required: true
    },
    categoria: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    imagen: {
        type: String,
        default: ""
    }
});
module.exports = mongoose.model("Productos", productosSchema);