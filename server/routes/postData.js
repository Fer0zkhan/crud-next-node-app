const express = require('express');
const postData = express();
const User = require('../models/User');


postData.post('/postData', async (req, res) => {

    const newUser = new User({
        name: req.body.data.name,
        username: req.body.data.username,
        email: req.body.data.email,
        phone: req.body.data.phone
    });
    try {
        const checkUser = await User.findOne({ username: req.body.data.username }, (err) => {
            return err;
        });
        if (checkUser != null) {
            res.json({ "message": "Username Already Exits" });
        }
        if (checkUser == null) {
            const saveNewUser = await newUser.save();
            console.log('dataSave');
            res.json({ "message": "Data Save" });
        }

    } catch (err) {
        res.json({ "message": err });
    }
});

postData.post('/findData', async (req, res) => {
    try {
        const data = await User.findOne({ username: req.body.username });
        res.json(data);
    } catch (error) {
        res.json(error);
    }
});

module.exports = postData;