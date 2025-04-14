// src/pages/PhonesList.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getPhones, deletePhone } from '../services/phoneService';
import BackButton from '../components/BackButton';

const PhonesList = () => {
  const [phones, setPhones] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPhones = async () => {
      try {
        const phonesData = await getPhones();
        setPhones(phonesData);
      } catch (error) {
        console.error('Erreur lors de la récupération des téléphones', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPhones();
  }, []);

  const handleDelete = async (id) => {
    const confirmed = window.confirm('Êtes-vous sûr de vouloir supprimer ce téléphone ?');
    if (confirmed) {
      try {
        await deletePhone(id);
        setPhones(phones.filter((phone) => phone._id !== id));
      } catch (error) {
        console.error('Erreur lors de la suppression du téléphone', error);
      }
    }
  };

  if (loading) {
    return <div className="text-center text-xl">Chargement...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <BackButton to="/" label="Retour à l'accueil" />


      <h1 className="text-3xl font-bold mb-6 text-center">Liste des téléphones</h1>

      <ul className="space-y-4">
        {phones.map((phone) => (
          <li key={phone._id} className="bg-white p-4 shadow-md rounded-lg flex justify-between items-center">
            <div>
              <h2 className="text-xl font-semibold">{phone.name}</h2>
              <p>{phone.brand} - {phone.color} - {phone.capacity} GO</p>
            </div>
            <div className="flex space-x-4">
              <button
                onClick={() => handleDelete(phone._id)}
                className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700 transition"
              >
                Supprimer
              </button>
              <Link
                to={`/update-phone/${phone._id}`}
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
              >
                Modifier
              </Link>
            </div>
          </li>
        ))}
      </ul>

      <Link
        to="/create-phone"
        className="mt-6 inline-block bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700 transition"
      >
        Ajouter un téléphone
      </Link>
    </div>
  );
};

export default PhonesList;
