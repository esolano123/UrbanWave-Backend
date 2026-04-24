const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');

const productRoutes = require('./routes/productRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);

module.exports = app;

const errorHandler = require('./middlewares/errorMiddleware');

app.use(errorHandler);