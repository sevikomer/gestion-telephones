// src/pages/CreatePhone.js
import React, { useState } from 'react';
import { createPhone } from '../services/phoneService';
import { useNavigate } from 'react-router-dom';
import BackButton from '../components/BackButton';

const CreatePhone = () => {
  const [name, setName] = useState('');
  const [brand, setBrand] = useState('');
  const [color, setColor] = useState('Rouge'); // Valeur par défaut
  const [capacity, setCapacity] = useState(16); // Valeur par défaut
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const phoneData = { name, brand, color, capacity };

    try {
      await createPhone(phoneData);
      navigate('/phones'); // Redirige vers la page liste des téléphones
    } catch (error) {
      console.error('Erreur lors de la création du téléphone', error);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-12">
      <BackButton to="/phones" label="Retour à la liste" />
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">Ajouter un téléphone</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-lg font-medium text-gray-700">Nom</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full mt-2 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="brand" className="block text-lg font-medium text-gray-700">Marque</label>
          <input
            type="text"
            id="brand"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            required
            className="w-full mt-2 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="color" className="block text-lg font-medium text-gray-700">Couleur</label>
          <select
            id="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            required
            className="w-full mt-2 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
          >
            <option value="Rouge">Rouge</option>
            <option value="Vert">Vert</option>
            <option value="Bleu">Bleu</option>
            <option value="Bleu">Noir</option>
            <option value="Bleu">Blanc</option>
          </select>
        </div>
        <div>
          <label htmlFor="capacity" className="block text-lg font-medium text-gray-700">Capacité (GO)</label>
          <input
            type="number"
            id="capacity"
            value={capacity}
            onChange={(e) => setCapacity(e.target.value)}
            required
            min="2"
            step="2"
            className="w-full mt-2 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 px-6 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Ajouter
        </button>
      </form>
    </div>
  );
};

export default CreatePhone;
