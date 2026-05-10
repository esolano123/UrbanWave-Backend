
const express = require('express');


  
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const messageRoutes = require('./routes/messageRoutes');

const productRoutes = require('./routes/productRoutes');

const app = express();


app.use(cors());
app.use(express.json());

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/messages', messageRoutes);


const errorHandler = require('./middlewares/errorMiddleware');

app.use(errorHandler);

module.exports = app;