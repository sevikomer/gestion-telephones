# Dockerfile pour le frontend
FROM node:16

# Crée et définit le répertoire de travail
WORKDIR /app

# Copie les fichiers package.json et package-lock.json
COPY package*.json ./

# Installe les dépendances
RUN npm install

# Copie tout le code source
COPY . .

# Expose le port sur lequel l'app frontend sera disponible
EXPOSE 3000

# Lancer l'application
CMD ["npm", "run", "dev"]
