const express = require("express");
const bcrypt = require("bcryptjs");
const Usuario = require("../models/Usuario");

console.log("RUTA USUARIOS CARGADA");

const router = express.Router();

router.get("/prueba", (req, res) => {
    res.json({
        mensaje: "Ruta funcionando"
    });
});
router.post("/registro", async (req, res) => {
    try {
        const { nombre, correo, telefono, password } = req.body;
        if (!nombre || !correo || !telefono || !password) {
            return res.status(400).json({
                mensaje: "Todos los campos son obligatorios"
            });
        }
        const existeUsuario = await Usuario.findOne({
            correo: correo.toLowerCase()
        });
        if (existeUsuario) {
            return res.status(400).json({
                mensaje: "El correo ya está registrado"
            });
        }
        const passwordHash = await bcrypt.hash(password, 10);
        const nuevoUsuario = new Usuario({
            nombre,
            correo: correo.toLowerCase(),
            telefono,
            password: passwordHash,
            rol: "cliente"
        });
        console.log("Usuario a guardar:", nuevoUsuario);
        await nuevoUsuario.save();
        console.log("✅ Usuario guardado correctamente");
        res.status(201).json({
            mensaje: "Usuario registrado correctamente"
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            mensaje: "Error al registrar usuario"
        });
    }
});
router.post("/login", async (req, res) => {
    try {
        const { correo, password } = req.body;
        const usuario = await Usuario.findOne({
            correo: correo.toLowerCase()
        });
        if (!usuario) {
            return res.status(400).json({
                mensaje: "Correo no registrado"
            });
        }
        const coincide = await bcrypt.compare(
            password,
            usuario.password
        );
        if (!coincide) {
            return res.status(400).json({
                mensaje: "Contraseña incorrecta"
            });
        }
        res.json({
            mensaje: "Inicio de sesión correcto",
            nombre: usuario.nombre,
            rol: usuario.rol
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            mensaje: "Error al iniciar sesión"
        });
    }
});
module.exports = router;