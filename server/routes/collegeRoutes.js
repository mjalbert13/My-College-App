const express = require('express');
const router = express.Router();
const sesion = require('express-session');
const College = require('../database/models/colleges');

router.post('/save/:id', (req, res) => {
    console.log("save college")

    const{collegeName, location, cost}= req.body;
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
                collegeName: collegeName,
                location: location,
                cost: cost
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
    College.findAll({}, (err, colleges) => {
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

