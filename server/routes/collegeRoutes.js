const express = require('express');
const router = express.Router();
const sesion = require('express-session');
const College = require('../../client/passport/database/models/colleges');

router.post('/:id', (req, res) => {
    console.log("save college route")
    console.log(req.body, "fixing");
    console.log(req.params, 'ID')

    const{collegeName, location, costPrivate, costPublic }= req.body;
    College.findOne({collegeName: collegeName}, (err, college) => {
        if(err) {
            console.log(err)
        } else if (college) {
            res.json({
                error:'Sorry college alerady added'
            })
        }
        else {
            console.log("++++++++ adding college")
            const newCollege = new College({
                collegeName,
                location,
                costPrivate,
                costPublic
            })
            console.log(newCollege);
            newCollege.save((err, savedCollege) => {
                if(err) return res.json(err)
                res.json(savedCollege)
                console.log("college Saved")
            })
        }
    })
})

router.get('/saved', (req, res) => {
    College.find({}, (err, colleges) => {
        if(err) {
            console.log(err)
        }
        console.log("show all colleges")
        res.status(200).send();
    })
})

router.delete("/saved/:id", (req,res) => {
    College.remove({_id: req.params.id}, (err, college) => {
        if(err) return err;
        res.status(200).send();
    })
})

module.exports=router;