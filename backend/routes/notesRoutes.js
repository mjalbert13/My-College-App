const express = require('express');
const router = express.Router();
const sesion = require('express-session');
const Note = require('../database/models/notes');
const College = require('../database/models/colleges');

// Route to update a note in the DB
router.post('/:id', function(req, res) {
    console.log("notes route");
    const update = _.assign({ "updatedAt": new Date() }, req.body);
    College.findOneAndUpdate(req.params.id, update, function(err, raw) {
        if (err) {
            res.send(err);
        }
        res.send(raw);
    });
});

router.get('/', (req, res) => {
    College.find({}, (err, colleges) => {
        if(err) {
            console.log(err)
        }
        console.log("show all colleges with notes")
        res.json(colleges).status(200).send();
    })
})

module.exports=router;