const express = require("express");
const Productos = require("../models/Productos");

const router = express.Router();

router.get("/", async (req, res) => {
    try {

        const productos = await Productos.find();

        res.json(productos);

    } catch (error) {

        console.error(error);
        res.status(500).json({
            mensaje: "Error al obtener productos"
        });
    }
});
router.post("/crear", async (req, res) => {
    try {
        const {
            nombre,
            categoria,
            precio,
            stock,
            imagen
        } = req.body;

        const nuevoProducto = new Productos({
            nombre,
            categoria,
            precio,
            stock,
            imagen
        });
        await nuevoProducto.save();
        res.status(201).json({
            mensaje: "Producto guardado correctamente"
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            mensaje: "Error al guardar producto"
        });
    }
});
router.put("/:id", async (req, res) => {
    try {
        const productoActualizado = await Productos.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.json(productoActualizado);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            mensaje: "Error al actualizar producto"
        });
    }
});
router.delete("/:id", async (req, res) => {
    try {
        await Productos.findByIdAndDelete(req.params.id);
        res.json({
            mensaje: "Producto eliminado"
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            mensaje: "Error al eliminar producto"
        });
    }
});
module.exports = router;