//las configuraciones de la base de datos

import mongoose from 'mongoose'

export const connectDB = async() => {
    try{
        await mongoose.connect("mongodb+srv://dupskops:DAMiILswOz72VBRA@cluster0.qv3wc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
        console.log('>>>> Database MongoDB is connected <<<<');
    }catch(error){
        console.log(error);
    }
}