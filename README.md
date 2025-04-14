# 📱 Gestion de Téléphones – Fullstack App (React + Node.js + MongoDB)

Ce projet est une application de gestion de téléphones, développée avec un **frontend React** (Vite + TailwindCSS) et un **backend Node.js / Express** avec une base de données **MongoDB**.

---

## 🛠️ Environnement nécessaire

Assurez-vous d’avoir installé sur votre machine :

- [Node.js](https://nodejs.org/) (v18 ou supérieur recommandé)
- [MongoDB](https://www.mongodb.com/try/download/community) (ou MongoDB Atlas)
- [Git](https://git-scm.com/)
- [pnpm](https://pnpm.io/) (optionnel mais recommandé pour la rapidité)

---

## 📦 Installation du projet

```bash
git clone https://github.com/sevikomer/gestion-telephones.git
cd gestion-telephones

---

Backend (Node.js + Express)
cd backend
npm install
Créez un fichier .env à la racine du dossier backend :
env
PORT=4200
MONGO_URI=mongodb://localhost:27017/gestion-telephones
Puis lancez le serveur backend :
npm run dev
L'API sera disponible sur http://localhost:4200.

✅ Documentation Swagger
Accédez à la documentation de l'API ici :
👉 http://localhost:4200/api-docs

Frontend (React + Vite + TailwindCSS)
cd ../frontend
npm install

Lancez le serveur de développement :
npm run dev
L'application React sera accessible sur http://localhost:5173.

📁 Structure du projet
gestion-telephones/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── swagger/
│   ├── tests/
│   ├── .env
│   ├── .app.js
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── assets/
│   │   ├── pages/
│   │   ├── components/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── tailwind.config.js
│   └── postcss.config.js
└── README.md


🚀 Fonctionnalités
🔍 Liste des téléphones
➕ Ajout d’un téléphone
📝 Modification d’un téléphone
❌ Suppression d’un téléphone

📑 Documentation Swagger auto-générée

📦 Tests unitaires et fonctionnels
Installation des dépendances :
npm install

Exécution des tests : Pour lancer tous les tests, exécute :
npm test

Types de tests :
Tests unitaires : Vérifient la logique des contrôleurs (création, mise à jour, suppression de téléphones).
Tests des routes : Vérifient les réponses des API pour les routes GET, POST, PUT, et DELETE.

Exemple de test de route PUT :

Mise à jour d’un téléphone via l’ID :
it('PUT /phones/:id doit mettre à jour un téléphone', async () => {
  const updatedData = { name: 'iPhone 12', brand: 'Apple', color: 'Blue', capacity: 128 };
  const res = await request(app).put(`/phones/${phoneId}`).send(updatedData);
  expect(res.statusCode).toBe(200);
  expect(res.body.name).toBe(updatedData.name);
});

🧪 Scripts utiles
Backend
npm run dev       # Lancer le serveur Express avec Nodemon

Frontend
npm run dev       # Lancer le serveur React

✍️ Auteur
Omer SEVIK

📜 Licence
Ce projet est open-source. Tu peux l’adapter à tes besoins.
