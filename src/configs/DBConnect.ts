import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const uri = process.env.URL as string;

mongoose.set('strictQuery', true);
mongoose.connect(uri);               //Add Your Connection String
const db = mongoose.connection;

db.on("error", ()=> console.log("DB Connection Error"));
db.once("open", ()=>{console.log("DB Connected");
});


export default db;
