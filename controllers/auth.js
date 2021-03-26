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

    const {fname, lname, username, password, passConfirm, faculty, contact, email} = req.body;
    
    dbConnection.query('SELECT username FROM users WHERE username = ?', [username], async (error, results) => {
        if(error) {
            console.log(error);
        }
        if(results.length > 0) {
            return res.render('register', {
                message: 'That username is already in use!'
            })
        }else if(password !== passConfirm) {
            return res.render('register', {
                message: 'Passwords do not match!'
            })
        }

        const hash_pass = await bcrypt.hash(password, 8);

        dbConnection.query('INSERT INTO users SET ?', {fname: fname, lname: lname, username: username, password: hash_pass, faculty: faculty, contact: contact, email: email},(error, result) =>{
            if(error) {
                console.log(error);
            }else {
                console.log(result);
                return res.render('register', {
                    message: 'User registered'
                })
            }
        })
    });

};

exports.login = async (req, res) => {
    try{
        const { username, password} = req.body;

        if(!username || !password) {
            return res.status(400).render('login', {
                message: 'Please provide an email and password'
            })
        }

        dbConnection.query('SELECT * FROM users WHERE username = ?', [username], async (error, results) => {
            console.log(results[0].password);
            if(!results || !(await bcrypt.compare(password, results[0].password))){
                res.status(401).render('login', {
                    message: 'Email or Password is Incorrect'
                })
            } else {
                const id = results[0].id;

                const token = jwt.sign({ id: id}, process.env.JWT_SECRET, {
                    expiresIn: process.env.JWT_EXPIRES_IN
                });

                console.log("The token is: " + token);

                const cookieOptions = {
                    expires: new Date(
                        Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 *60 *1000
                    ),
                    httpOnly: true
                }

                res.cookie('jwt', token, cookieOptions);
                res.status(200).render('dashboard');
            }
        })
    }catch (error){
        console.log(error);
    }
};