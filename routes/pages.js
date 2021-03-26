const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.render('home');
});

router.get('/register', (req, res) => {
    res.render('register',{message:''});
});

router.get('/login', (req, res) => {
    res.render('login',{message:''});
});

router.get('/logout', (req, res) => {
    res.clearCookie('jwt');
    res.redirect('/');
})

module.exports = router;