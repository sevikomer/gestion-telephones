const express = require("express");
const router = express.Router();
const phoneController = require('../controllers/phoneController');

/**
 * @swagger
 * components:
 *   schemas:
 *     Phone:
 *       type: object
 *       required:
 *         - name
 *         - capacity
 *       properties:
 *         _id:
 *           type: string
 *           description: ID auto-généré du téléphone
 *         name:
 *           type: string
 *           description: Nom du téléphone
 *         brand:
 *           type: string
 *           description: Marque du téléphone
 *         color:
 *           type: string
 *           description: Couleur du téléphone
 *         capacity:
 *           type: integer
 *           description: Capacité en GO
 *       example:
 *         _id: 660fd23123abcdef12345678
 *         name: iPhone 13
 *         brand: Apple
 *         color: Bleu
 *         capacity: 128
 */



/**
 * @swagger
 * tags:
 *   name: Phones
 *   description: API pour gérer les téléphones
 */

/**
 * @swagger
 * /phones:
 *   get:
 *     summary: Récupère la liste de tous les téléphones
 *     tags: [Phones]
 *     responses:
 *       200:
 *         description: Liste des téléphones récupérée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Phone'
 */
router.get('/', phoneController.getPhones);

/**
 * @swagger
 * /phones:
 *   post:
 *     summary: Crée un nouveau téléphone
 *     tags: [Phones]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Phone'
 *     responses:
 *       201:
 *         description: Téléphone créé avec succès
 */
router.post('/', phoneController.createPhone);

/**
 * @swagger
 * /phones/{id}:
 *   put:
 *     summary: Met à jour un téléphone par ID
 *     tags: [Phones]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID du téléphone
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Phone'
 *     responses:
 *       200:
 *         description: Téléphone mis à jour avec succès
 */
router.put('/:id', phoneController.updatePhone);

/**
 * @swagger
 * /phones/{id}:
 *   delete:
 *     summary: Supprime un téléphone par ID
 *     tags: [Phones]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID du téléphone
 *     responses:
 *       200:
 *         description: Téléphone supprimé avec succès
 */
router.delete('/:id', phoneController.deletePhone);

module.exports = router;
