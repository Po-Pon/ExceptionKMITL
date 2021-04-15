const express = require('express');

const router = express.Router();

var sessionChecker = (req, res, next) => {
    if (req.session.user && req.cookies.user_sid) {
      res.redirect("/dashboard");
    } else {
      next();
    }
};

router.get("/", sessionChecker, (req, res) => {
    res.redirect("/login");
});

// router.get('/', (req, res) => {
//     res.render('home');
// });

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