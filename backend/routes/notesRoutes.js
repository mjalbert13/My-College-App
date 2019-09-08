const express = require('express');
const router = express.Router();
const sesion = require('express-session');
const Note = require('../database/models/notes');
const College = require('../database/models/colleges');

router.post('/:id', (req, res) => {
    console.log("save note route")
    console.log(req.body, "fixing");
    console.log(req.params, 'ID')

    const{school, location, costPrivate, costPublic, note}= req.body;

    // This would likely be inside of a PUT request, since we're updating an existing document, hence the req.params.todoId.
    // Find the existing resource by ID
    College.findOneAndUpdate(
        // the id of the item to find
        {collegeName: school},
        
        // the change to be made. Mongoose will smartly combine your existing 
        // document with this change, which allows for partial updates too
        req.body,
        
        // an option that asks mongoose to return the updated version 
        // of the document instead of the pre-updated one.
        {new: true},
        
        // the callback function
        (err, college) => {
        // Handle any possible database errors
            if (err) return res.status(500).send(err);
            return res.send(college);
        }
    )
})

module.exports=router;