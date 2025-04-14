const express = require('express');
const cors = require('cors');
const setupSwagger = require('./swagger/swaggerConfig');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const phoneRoutes = require('./routes/phoneRoutes');


require("dotenv").config();

mongoose
    .connect(process.env.MONGO_CONNECTION)
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

const app = express();

// Middleware CORS
app.use(cors());

// Middleware pour les headers CORS personnalisés
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

// Middleware pour analyser le corps de la requête
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Route de base
app.get("/", (req, res) => {
    res.send("Bienvenue sur l'API Gestion de téléphones !");
});

// Routes pour les blagues
app.use("/api/phones", phoneRoutes);

// Configuration Swagger
setupSwagger(app);

// Export de l'application
module.exports = app;