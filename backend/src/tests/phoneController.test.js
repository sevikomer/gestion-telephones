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
    app.use('/', phoneRoutes);
});

afterAll(async () => {
    // Fermer la connexion à la DB et arrêter le serveur en mémoire
    await mongoose.disconnect();
    await mongoServer.stop();
});

describe('Phone API tests', () => {
    it('GET / doit renvoyer la liste des téléphones (vide au début)', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([]);
    });

    it('POST / doit créer un téléphone et le renvoyer', async () => {
        const phoneData = { name: 'iPhone', brand: 'Apple', color: 'Black', capacity: 64 };

        const res = await request(app).post('/').send(phoneData);
        expect(res.statusCode).toBe(201);
        expect(res.body).toHaveProperty('_id');
        expect(res.body.name).toBe(phoneData.name);
        expect(res.body.brand).toBe(phoneData.brand);
    });

    it('PUT /:id doit mettre à jour un téléphone existant', async () => {
        // Créer un téléphone avant de tester la mise à jour
        const phoneData = { name: 'iPhone', brand: 'Apple', color: 'Black', capacity: 64 };
        const phone = await Phone.create(phoneData);

        // Données à mettre à jour
        const updatedData = { name: 'iPhone 12', brand: 'Apple', color: 'Blue', capacity: 128 };

        const res = await request(app).put(`/${phone._id}`).send(updatedData);
        expect(res.statusCode).toBe(200);
        expect(res.body.name).toBe(updatedData.name);
        expect(res.body.color).toBe(updatedData.color);
        expect(res.body.capacity).toBe(updatedData.capacity);

        // Vérifier dans la base de données si le téléphone a bien été mis à jour
        const updatedPhone = await Phone.findById(phone._id);
        expect(updatedPhone.name).toBe(updatedData.name);
        expect(updatedPhone.color).toBe(updatedData.color);
        expect(updatedPhone.capacity).toBe(updatedData.capacity);
    });

    it('DELETE /:id doit supprimer un téléphone existant', async () => {
        const phoneData = { name: 'iPhone', brand: 'Apple', color: 'Black', capacity: 64 };
        const phone = await Phone.create(phoneData);

        const res = await request(app).delete(`/${phone._id}`);
        expect(res.statusCode).toBe(200);

        // Vérifier que le téléphone a bien été supprimé
        const deletedPhone = await Phone.findById(phone._id);
        expect(deletedPhone).toBeNull();
    });
});
