const mysql = require('mysql');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const dbConnection = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});

exports.register = (req, res) => {
    console.log(req.body);

    const {fname, lname, username, pass, passConfirm, faculty, contact, email} = req.body;
    
    dbConnection.query('SELECT username FROM users WHERE username = ?', [username], async (error, result) => {
        if(error) {
            console.log(error);
        }
        if(result.length > 0) {
            return res.render('register', {
                //message: 'That username is already in use!'
            })
        }else if(pass !== passConfirm) {
            return res.render('register', {
                //message: 'Passwords do not match!'
            })
        }

        const hash_pass = await bcrypt.hash(pass, 8);

        dbConnection.query('INSERT INTO users SET ?', {fname: fname, lname: lname, username: username, password: hash_pass, faculty: faculty, contact: contact, email: email},(error, result) =>{
            if(error) {
                console.log(error);
            }else {
                console.log(result);
                return res.render('register', {
                    //message: 'User registered'
                })
            }
        })
    });

};