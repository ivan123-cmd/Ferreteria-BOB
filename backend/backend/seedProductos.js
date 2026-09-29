const mongoose = require("mongoose");
require("dotenv").config();

const Productos = require("./models/Productos");

mongoose.connect(process.env.MONGODB_URI)
.then(async()=>{

    await Productos.deleteMany({});
    await Productos.insertMany([
        {
            nombre:"Martillo",
            categoria:"Herramientas Manuales",
            precio:25000,
            stock:50
        },
        {
            nombre:"Destornillador",
            categoria:"Herramientas Manuales",
            precio:12000,
            stock:100
        },
        {
            nombre:"Alicate",
            categoria:"Herramientas Manuales",
            precio:18000,
            stock:80
        },
        {
            nombre:"Llave Inglesa",
            categoria:"Herramientas Manuales",
            precio:30000,
            stock:50
        },

        {
            nombre:"Cables",
            categoria:"Material Eléctrico",
            precio:8000,
            stock:200
        },
        {
            nombre:"Bombillos",
            categoria:"Material Eléctrico",
            precio:5000,
            stock:150
        },
        {
            nombre:"Interruptores",
            categoria:"Material Eléctrico",
            precio:9000,
            stock:120
        },
        {
            nombre:"Tomacorrientes",
            categoria:"Material Eléctrico",
            precio:7000,
            stock:100
        },

        {
            nombre:"Tubos PVC",
            categoria:"Plomería",
            precio:15000,
            stock:90
        },
        {
            nombre:"Codos PVC",
            categoria:"Plomería",
            precio:4000,
            stock:120
        },
        {
            nombre:"Sifón",
            categoria:"Plomería",
            precio:12000,
            stock:70
        },
        {
            nombre:"Manguera",
            categoria:"Plomería",
            precio:20000,
            stock:60
        },

        {
            nombre:"Pintura Blanca",
            categoria:"Pinturas",
            precio:65000,
            stock:40
        },
        {
            nombre:"Esmalte",
            categoria:"Pinturas",
            precio:28000,
            stock:50
        },
        {
            nombre:"Brocha",
            categoria:"Pinturas",
            precio:6000,
            stock:100
        },
        {
            nombre:"Rodillo",
            categoria:"Pinturas",
            precio:11000,
            stock:90
        },

        {
            nombre:"Guantes",
            categoria:"Seguridad Industrial",
            precio:8000,
            stock:100
        },
        {
            nombre:"Casco",
            categoria:"Seguridad Industrial",
            precio:40000,
            stock:40
        },
        {
            nombre:"Gafas",
            categoria:"Seguridad Industrial",
            precio:18000,
            stock:60
        },
        {
            nombre:"Botas",
            categoria:"Seguridad Industrial",
            precio:90000,
            stock:30
        }
    ]);
    console.log("✅ Productos cargados correctamente");
    mongoose.connection.close();
})
.catch(error=>{
    console.error(error);
});