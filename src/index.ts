import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import db from './configs/DBConnect';
db;
dotenv.config();
import { startApp } from './configs/app';
import router from './routes/Routes';
import cors from 'cors'

const PORT = process.env.PORT || 8080;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())
// startApp(app);


app.use("/", router);

app.get("/", (req, res) => { res.send("Hello") })


app.listen(PORT, () => { console.log(`http://localhost:${PORT}`) })