import express from 'express';
import mongoose from 'mongoose'
import bodyParser from 'body-parser';
import ('dotenv/config')
import { itemRouter } from './router/itemRouter.js';
import { sliderRouter } from './router/sliderRouter.js';
import { promotionRouter } from './router/promotionRouter.js';
import { orderRouter } from './router/orderRouter.js';
import {authRouter} from './router/authRouter.js'
import cors from 'cors'
import cookieParser from 'cookie-parser';
const app = express();
const port = 4000;

app.use(cors({
    origin:'http://localhost:3000',
    credentials:true
}));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.use('/database', express.static('database'))
app.use('/item', itemRouter);
app.use('/promotion', promotionRouter);
app.use('/slider', sliderRouter);
app.use('/order', orderRouter);
app.use('/auth', authRouter);

const dbName = "Starbug"
const dbUrl = `mongodb+srv://StarbugCoffee:vcydm8VTdB75VRjz@starbugproject.ukwaquc.mongodb.net/${dbName}?retryWrites=true&w=majority`

mongoose.connect(dbUrl).then(()=> {
    console.log('connected to db')
});



app.listen(port, () =>{
    console.log(`Server running on port ${port}`);
});