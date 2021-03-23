const express = require('express');
//const mysql = require('mysql');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: './.env'});

const app = express();

app.set('view engine', 'ejs');
app.set('views', (__dirname,'views'));

app.use(express.static(path.join(__dirname,'./static')));

// const dbConnection = mysql.createConnection({
//     host: process.env.DATABASE_HOST,
//     user: process.env.DATABASE_USER,
//     password: process.env.DATABASE_PASSWORD,
//     database: process.env.DATABASE
// });

// dbConnection.connect((error) =>{
//     if(error) throw err
//     else{
//         console.log("MYSQL Connected...")
//     }
// })

app.get('/', (req,res) => {
    res.render('home');
})

app.listen(3000,() => {
    console.log("Server is running in port 3000....");
});