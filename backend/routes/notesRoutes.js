const express = require('express');
const router = express.Router();
const sesion = require('express-session');
const Note = require('../database/models/notes');
const College = require('../database/models/colleges');

// Route to update a quote in the DB
router.put('/:id', function(req, res) {
    const update = _.assign({ "updatedAt": new Date() }, req.body);
    College.findOneAndUpdate(req.params.school, update, function(err, raw) {
        if (err) {
            res.send(err);
        }
        res.send(raw);
    });
});

module.exports=router;