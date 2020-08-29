const express = require('express');
const updateData = express();
const User = require('../models/User');


updateData.patch('/updateData', async (req, res) => {
    try {
        const update = await User.updateOne(
            { username: req.body.data.username },
            {
                name: req.body.data.newName,
                username: req.body.data.newUsername,
                email: req.body.data.newEmail,
                phone: req.body.data.newPhone
            });
        if (update) {
            res.json({ "message": "Data Updated" });
            console.log(update);
        }
        if (!update) {
            res.json({ "message": "Data Not Updated" });
        }
    } catch (error) {
        res.send({ "message": error });
    }

});
module.exports = updateData;