const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const usuariosRoutes = require("./routes/Usuario");
const productosRoutes = require("./routes/Productos");
const pedidoRoutes = require("./routes/Pedido");

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/usuarios", usuariosRoutes);
app.use("/api/productos", productosRoutes);
app.use("/api/pedidos", pedidoRoutes);

mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log("✅ MongoDB conectado"))
.catch(error => console.error(error));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor funcionando en http://localhost:${PORT}`);
});