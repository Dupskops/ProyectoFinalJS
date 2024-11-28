import express from 'express';
import cors from 'cors';
import app from './app.js';
import { connectDB } from './db.js';

const port = 4000;

// Configuración de CORS
app.use(cors({
    origin: 'https://sage-zuccutto-3c0608.netlify.app' // Asegúrate de que coincide con la URL del frontend
}));

app.listen(port, () => {
    console.log(`Web Server on port: ${port}`);
});

// Conecta a la base de datos
connectDB();
