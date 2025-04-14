// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-6">Bienvenue sur Gestion des Téléphones</h1>
        <p className="text-xl text-gray-600 mb-6">Une application pour gérer vos téléphones facilement !</p>
        <Link
          to="/phones"
          className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition text-xl"
        >
          Voir la Liste des Téléphones
        </Link>
      </div>
    </div>
  );
};

export default Home;
