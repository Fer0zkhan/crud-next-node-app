const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
require('dotenv/config');

app.use(bodyParser.json());
app.use(cors());

//Import Routes
const postData = require('./routes/postData');
const getData = require('./routes/getData');
const deleteData = require('./routes/deleteData');
const updateData = require('./routes/updateData');

//Routes MiddleWares
app.use('/post', postData);
app.use('/get', getData);
app.use('/delete', deleteData);
app.use('/update', updateData);

mongoose.connect(process.env.DB_NAME, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log("Connection Ready");
});

app.listen(process.env.PORT || 5000, () => {
    console.log(`Server running at Port : ${process.env.PORT}`);
});


