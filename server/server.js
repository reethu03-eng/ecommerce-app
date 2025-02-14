const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

const productRoutes = require('./routes/productRoutes');
app.use('/api', productRoutes);

mongoose.connect('mongodb://localhost:27017/ecommerce', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

