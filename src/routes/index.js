const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/' , (req ,res) => {
    res.send('Home');
});

router.get('/profile' , (req , res) => {
    res.send('profile')
});

router.post('/signin' , passport.authenticate('signin' , {
    successRedirect: '/profile',
    failureRedirect: '/' 
}));

module.exports = router;