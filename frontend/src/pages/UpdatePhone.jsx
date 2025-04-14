import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getPhoneById, updatePhone } from '../services/phoneService';
import BackButton from '../components/BackButton';


const UpdatePhone = () => {
  const { id } = useParams(); // Récupère l'id du téléphone à éditer
  const navigate = useNavigate();
  const [phone, setPhone] = useState({
    name: '',
    brand: '',
    color: '',
    capacity: '',
  });

  useEffect(() => {
    const fetchPhone = async () => {
      try {
        const phoneData = await getPhoneById(id);
        setPhone(phoneData);
      } catch (error) {
        console.error('Erreur lors de la récupération du téléphone', error);
      }
    };

    fetchPhone();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updatePhone(id, phone);
      navigate('/phones');
    } catch (error) {
      console.error('Erreur lors de la mise à jour du téléphone', error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <BackButton to="/phones" label="Retour à la liste" />
      <h1 className="text-3xl font-bold mb-6 text-center">Modifier le téléphone</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nom</label>
          <input
            type="text"
            id="name"
            value={phone.name}
            onChange={(e) => setPhone({ ...phone, name: e.target.value })}
            required
            className="w-full mt-1 p-3 border border-gray-300 rounded-lg"
          />
        </div>
        <div>
          <label htmlFor="brand" className="block text-sm font-medium text-gray-700">Marque</label>
          <input
            type="text"
            id="brand"
            value={phone.brand}
            onChange={(e) => setPhone({ ...phone, brand: e.target.value })}
            required
            className="w-full mt-1 p-3 border border-gray-300 rounded-lg"
          />
        </div>
        <div>
          <label htmlFor="color" className="block text-sm font-medium text-gray-700">Couleur</label>
          <select
            id="color"
            value={phone.color}
            onChange={(e) => setPhone({ ...phone, color: e.target.value })}
            required
            className="w-full mt-1 p-3 border border-gray-300 rounded-lg"
          >
            <option value="Rouge">Rouge</option>
            <option value="Vert">Vert</option>
            <option value="Bleu">Bleu</option>
            <option value="Bleu">Noir</option>
            <option value="Bleu">Blanc</option>
          </select>
        </div>
        <div>
          <label htmlFor="capacity" className="block text-sm font-medium text-gray-700">Capacité (GO)</label>
          <input
            type="number"
            id="capacity"
            value={phone.capacity}
            onChange={(e) => setPhone({ ...phone, capacity: e.target.value })}
            required
            min="2"
            step="2"
            className="w-full mt-1 p-3 border border-gray-300 rounded-lg"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
        >
          Mettre à jour
        </button>
      </form>
    </div>
  );
};

export default UpdatePhone;
