import express from 'express';
import morgan from 'morgan';

import authRoutes from './routes/auth.routes.js'

const app = express();
app.use(morgan('dev'));
app.use(express.json());


app.use('/api/auth',authRoutes);

app.get('/', (req,res) =>{ 
    res.send('<h1> Hola mundo UTP 2024 </h1>');
});

export default app;