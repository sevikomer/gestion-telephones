import axios from 'axios';

const API_URL = 'http://localhost:4200/api/phones';

// 1. Créer un téléphone
export const createPhone = async (phoneData) => {
  try {
    const response = await axios.post(API_URL, phoneData);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la création du téléphone', error);
    throw error;
  }
};

// 2. Récupérer la liste des téléphones
export const getPhones = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des téléphones', error);
    throw error;
  }
};

// 3. Récupérer un téléphone par ID
export const getPhoneById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération du téléphone', error);
    throw error;
  }
};

// 4. Mettre à jour un téléphone
export const updatePhone = async (id, phoneData) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, phoneData);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la mise à jour du téléphone', error);
    throw error;
  }
};

// 5. Supprimer un téléphone
export const deletePhone = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la suppression du téléphone', error);
    throw error;
  }
};
