const express = require("express");
const router = express.Router();
const phoneController = require('../controllers/phoneController');

// Récupérer tous les téléphones
router.get('/', phoneController.getPhones);

// Créer un nouveau téléphone
router.post('/', phoneController.createPhone);

// Mettre à jour un téléphone par ID
router.put('/:id', phoneController.updatePhone);

// Supprimer un téléphone par ID
router.delete('/:id', phoneController.deletePhone);

module.exports = router;