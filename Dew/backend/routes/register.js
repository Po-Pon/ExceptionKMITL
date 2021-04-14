const express = require("express");
const path = require("path")
const pool = require("../config");
const bcrypt = require ('bcrypt')

router = express.Router();

// coding here !!

router.post("/register/submit", async function (req, res, next){
    // User send form data to backend
    console.log(req.body.form)
    const Firstname = req.body.form.Firstname
    const Lastname = req.body.form.Lastname
    const StudentID = req.body.form.StudentID
    const Status = req.body.form.Status
    const Email = req.body.form.Email
    const Password = req.body.form.Password
    // bcrypt password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(Password, salt)
    const conn = await pool.getConnection()
    await conn.beginTransaction();
    try {
        let [rows1, notuse1] = await conn.query("SELECT acc_email FROM account WHERE acc_email = ?", [Email])
        let [rows2, notuse2] = await conn.query("SELECT user_studentid FROM user WHERE user_studentid = ?", [StudentID])
        if(rows1.length > 0 && rows2.length > 0){
            res.json({message : "Email นี้ถูกใช้แล้ว", errorEmail : 'error', errorStudentid : 'error'})
            console.log('Error', 'Email และ StudentID ซ้ำ')
        }
        else if(rows1.length > 0){
            res.json({message : "Email นี้ถูกใช้แล้ว", errorEmail : 'error'})
            console.log('Error','Email ซ้ำ')
        }
        else if(rows2.length > 0){
            res.json({message : "StudentID นี้ถูกใช้แล้ว", errorStudentid : 'error'})
            console.log('Error', 'StudentID ซ้ำ')
        }
        else{
            await conn.query(
                "INSERT INTO account(acc_fname, acc_lname, acc_password, acc_email, create_date) VALUES(?, ?, ?, ?, CURRENT_TIMESTAMP);",
                [Firstname, Lastname, hashedPassword, Email]
            ) // insert data in table_account
            await conn.query(
                "INSERT INTO user(user_studentid, user_status) VALUES(?, ?);",
                [StudentID, Status]
            ) //  insert data in table_user
            await conn.query(
                "INSERT INTO admin(rule_manage_acc, rule_standand_admin, access_key) VALUES(false, false, null);"
            ) //  insert data in table_admin
            await conn.commit()
            var d = new Date();
            var n = d.toString();
            console.log('register success!', 'Time:', n.substring(16,21))
            res.json({message : "register success Let's Login!"});
        }
    } catch (error) {
        await conn.rollback();
        next(error);
    }
})

exports.router = router;
