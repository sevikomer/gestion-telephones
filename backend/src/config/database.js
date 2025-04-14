import mongoose from 'mongoose';

// Fonction de connexion à MongoDB
const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/phones', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('✅ MongoDB connecté');
    } catch (err) {
        console.error('❌ Erreur de connexion MongoDB :', err.message);
        process.exit(1);  // Arrêter le processus si la connexion échoue
    }
};

export default connectDB;
