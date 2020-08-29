const express = require('express');
const getData = express();
const User = require('../models/User');

getData.get('/getAllData', async(req, res) => {
    try {
        const data = await User.find({});
        res.json(data);
    } catch (error) {
        res.json(error);
    }
});



module.exports = getData;