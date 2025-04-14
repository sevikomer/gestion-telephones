import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react'; // Icône légère (facultatif si tu utilises lucide)

const BackButton = ({ to = '/', label = 'Retour' }) => {
  return (
    <Link
      to={to}
      className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900 bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded transition"
    >
      <ArrowLeft size={18} />
      {label}
    </Link>
  );
};

export default BackButton;
