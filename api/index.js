import express from 'express'
import {db}  from './config/database.js'
import HouseRoutes from './routes/HouseRoutes.js'
import bodyParser from 'body-parser';
import cors from "cors";

const app = express();

db.connect(function(err){
    if (err) throw err;

    console.log("Database Commected Succesfully")
})


app.use(cors());
app.use(express.json());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(HouseRoutes);



app.listen(8000, ()=> {
    console.log("The Backend is Live on port 8000!!")
});

