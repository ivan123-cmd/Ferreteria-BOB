const express = require("express");
const Pedido = require("../models/Pedido");

const router = express.Router();

router.post("/crear", async (req, res) => {

    try {
        const pedido = new Pedido(req.body);
        await pedido.save();
        res.status(201).json({
            mensaje: "Pedido guardado correctamente"
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            mensaje: "Error al guardar pedido"
        });
    }
});
router.get("/", async (req, res) => {
    try {
        const pedidos = await Pedido.find();
        res.json(pedidos);
    } catch (error) {
        res.status(500).json({
            mensaje: "Error al obtener pedidos"
        });
    }
});

module.exports = router;