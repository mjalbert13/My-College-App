const express = require('express')
const router = express.Router()
const User = require('../database/models/users')
const passport = require('passport')

router.post('/', (req, res) => {
    console.log('user signup');

    const { firstName, lastName, password, email } = req.body
    // ADD VALIDATION
    User.findOne({ email: email}, (err, user) => {
        if (err) {
            console.log('User.js post error: ', err)
        } else if (user) {
            console.log("else if ======")
            res.json({
                error: `Sorry, already a user with the email: ${email}`
            })
        }
        else {
            console.log("+++++added user")
            const newUser = new User({
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password
            })
            console.log(newUser)
            newUser.save((err, savedUser) => {
                if (err) return res.json(err)
                res.json(savedUser)
                console.log("user saved")
            })
        }
    })
})

router.post('/login', function (req, res, next) {
        console.log('routes/user.js, login, req.body: ');
        console.log(req.body)
        next()
    },
    passport.authenticate('local'),
    (req, res) => {
        console.log('logged in', req.user);
        var userInfo = {
            name: req.user.name
        };
        res.send(userInfo);
    }
)

router.get('/', (req, res, next) => {
    console.log('===== user!!======')
    console.log(req.user)
    if (req.user) {
        res.json({ user: req.user })
    } else {
        res.json({ user: null })
    }
})

router.post('/logout', (req, res) => {
    if (req.user) {
        req.logout()
        res.send({ msg: 'logging out' })
    } else {
        res.send({ msg: 'no user to log out' })
    }
})

module.exports = router