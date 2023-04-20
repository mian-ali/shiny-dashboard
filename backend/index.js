import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';

/* ROUTES FILES REQUIRE */
import clientRoutes from './routes/client.js';
import generalRoutes from './routes/general.js';
import managementRoutes from './routes/management.js';
import salesRoutes from './routes/sales.js';

// data imports

import User from './models/User.js';
import Product from './models/Product.js';
import ProductStat from './models/ProductStat.js';
import Transaction from './models/Transactions.js';
import {
  dataUser,
  dataProduct,
  dataProductStat,
  dataTransaction,
} from './data/index.js';

/* CONFIGRATION */
dotenv.config();
const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }));
app.use(morgan('common'));

/* API CALLING ROUTES */
app.use('/client', clientRoutes);
app.use('/general', generalRoutes);
app.use('/mangement', managementRoutes);
app.use('/sales', salesRoutes);

/* MONGOOSE CONNECTION */
const PORT = process.env.PORT || 8080;

mongoose.set('strictQuery', false);
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () =>
      console.log(
        `Server running on port: ${PORT} and also Connected to MongoDB host: ${mongoose.connection.name}`
      )
    );

    /* ONLY ADD DATA ONE TIME */
    // Product.insertMany(dataProduct);
    // ProductStat.insertMany(dataProductStat);
    // Transaction.insertMany(dataTransaction);
    // User.insertMany(dataUser);
  })
  .catch((error) => console.log(`${error} did not connect`));
