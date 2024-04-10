const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const sequelize = require('./src/sequelize');

// Configuración de variables de entorno
dotenv.config();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Middleware para habilitar CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:5000');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

// Rutas
const enlaceRoutes = require('./src/models/enlace.model'); 
app.use('/src/routes/enlace.route.js', enlaceRoutes); // Monta las rutas de enlace en '/api/enlaces'

// Iniciar el servidor
const PORT = process.env.PORT || 5000; // Establece el puerto
sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running at port ${PORT}`);
    });
}).catch(err => {
    console.error('Unable to connect to the database:', err);
});
