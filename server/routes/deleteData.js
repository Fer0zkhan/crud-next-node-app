const express = require('express');
const delData = express();
const User = require('../models/User');

delData.delete('/delData', async (req, res) => {
    try {
        const data = await User.findOneAndDelete({ username: req.body.data.username });
        if (data == null) {
            res.json({ "message": "Data Not Deleted or Found" });
        }
        if (data != null) {
            res.json({ "message": "Data Deleted" });
        }


    } catch (error) {
        res.json({ "message": error });
    }
});

module.exports = delData;