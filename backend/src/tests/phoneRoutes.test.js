const request = require('supertest');
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const express = require('express');
const phoneRoutes = require('../routes/phoneRoutes');
const Phone = require('../models/Phone');

let mongoServer;
let app;

beforeAll(async () => {
    // Démarrer le serveur MongoDB en mémoire
    mongoServer = await MongoMemoryServer.create();
    const uri = mongoServer.getUri();

    // Connecter Mongoose à la DB en mémoire
    await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    // Créer une application Express
    app = express();
    app.use(express.json());
    app.use('/phones', phoneRoutes); // Utiliser /phones pour les routes
});

afterAll(async () => {
    // Fermer la connexion à la DB et arrêter le serveur en mémoire
    await mongoose.disconnect();
    await mongoServer.stop();
});

describe('Phone Routes API tests', () => {
    let phoneId;

    it('GET /phones doit renvoyer une liste vide au début', async () => {
        const res = await request(app).get('/phones');
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([]);
    });

    it('POST /phones doit créer un téléphone et le renvoyer', async () => {
        const phoneData = { name: 'iPhone', brand: 'Apple', color: 'Black', capacity: 64 };

        const res = await request(app).post('/phones').send(phoneData);
        phoneId = res.body._id; // Récupérer l'ID du téléphone créé pour les tests suivants

        expect(res.statusCode).toBe(201);
        expect(res.body).toHaveProperty('_id');
        expect(res.body.name).toBe(phoneData.name);
        expect(res.body.brand).toBe(phoneData.brand);
    });

    it('PUT /phones/:id doit mettre à jour un téléphone existant', async () => {
        const updatedData = { name: 'iPhone 12', brand: 'Apple', color: 'Blue', capacity: 128 };

        const res = await request(app).put(`/phones/${phoneId}`).send(updatedData);
        expect(res.statusCode).toBe(200);
        expect(res.body.name).toBe(updatedData.name);
        expect(res.body.color).toBe(updatedData.color);
        expect(res.body.capacity).toBe(updatedData.capacity);
    });

    it('DELETE /phones/:id doit supprimer un téléphone existant', async () => {
        const res = await request(app).delete(`/phones/${phoneId}`);
        expect(res.statusCode).toBe(200);

        const deletedPhone = await Phone.findById(phoneId);
        expect(deletedPhone).toBeNull(); // Vérifier que le téléphone a bien été supprimé
    });
});
