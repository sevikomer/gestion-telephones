const Phone = require('../models/Phone');

// GET - récupérer tous les téléphones
const getPhones = async (req, res) => {
    try {
        const phones = await Phone.find();
        res.status(200).json(phones);
    } catch (error) {
        res.status(500).json({ message: 'Erreur serveur', error });
    }
};

// POST - créer un nouveau téléphone
const createPhone = async (req, res) => {
    try {
        const { brand, imei, name, color, capacity } = req.body;

        if (!name || capacity <= 0 || capacity % 2 !== 0) {
            return res.status(400).json({ message: 'Nom requis et capacité valide (multiple de 2).' });
        }

        const phone = new Phone({ brand, imei, name, color, capacity });
        await phone.save();
        res.status(201).json(phone);
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la création', error });
    }
};

// PUT - mettre à jour un téléphone
const updatePhone = async (req, res) => {
    try {
        const { id } = req.params;
        const { brand, imei, name, color, capacity } = req.body;

        if (!name || capacity <= 0 || capacity % 2 !== 0) {
            return res.status(400).json({ message: 'Nom requis et capacité valide (multiple de 2).' });
        }

        const phone = await Phone.findByIdAndUpdate(
            id,
            { brand, imei, name, color, capacity },
            { new: true }
        );

        if (!phone) {
            return res.status(404).json({ message: 'Téléphone non trouvé.' });
        }

        res.status(200).json(phone);
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la mise à jour', error });
    }
};

// DELETE - supprimer un téléphone
const deletePhone = async (req, res) => {
    try {
        const { id } = req.params;

        const phone = await Phone.findByIdAndDelete(id);
        if (!phone) {
            return res.status(404).json({ message: 'Téléphone non trouvé.' });
        }

        res.status(200).json({ message: 'Téléphone supprimé.' });
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la suppression', error });
    }
};

module.exports = {
    getPhones,
    createPhone,
    updatePhone,
    deletePhone,
};
