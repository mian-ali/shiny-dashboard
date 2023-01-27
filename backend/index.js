import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';

/* CONFIGRATION */
dotenv.config();
const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: 'corss-origin' }));
app.use(morgan('common'));

/* API CALLING ROUTES */
app.use('/client', clientRoutes);
app.use('/general', generalRoutes);
app.use('/mangement', managementRoutes);
app.use('/sales', salesRoutes);
