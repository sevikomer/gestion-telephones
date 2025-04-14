# Dockerfile pour le backend
FROM node:16

# Crée et définit le répertoire de travail
WORKDIR /app

# Copie les fichiers package.json et package-lock.json
COPY package*.json ./

# Installe les dépendances
RUN npm install

# Copie tout le code source
COPY . .

# Expose le port sur lequel l'app backend sera disponible
EXPOSE 5000

# Lancer l'application
CMD ["npm", "start"]
