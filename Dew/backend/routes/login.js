const express = require("express");
const path = require("path")
const pool = require("../config");
const bcrypt = require('bcrypt');

router = express.Router();

// coding here !!
router.post("/checkingLogin", async function(req, res, next){
    const email = req.body.form.email
    const password = req.body.form.password
    console.log('email', email, 'password', password)
    // conn db
    const conn = await pool.getConnection()
    await conn.beginTransaction();
    try {
        let [rows, notuse] = await conn.query("SELECT acc_email, acc_password FROM account WHERE acc_email = ?", [email])
        if(rows.length > 0)
        {
            const match = await bcrypt.compare(password, rows[0].acc_password);
            if(match){
                let [userid, _] = await conn.query("SELECT user_studentid FROM account a join user b ON a.acc_id=b.acc_id WHERE acc_email = ?", [email])
                res.json({message: 'log in success!', user_id: userid[0].user_studentid})
                console.log('studentid', userid[0].user_studentid)
                var d = new Date();
                var n = d.toString();
                console.log('login success!', 'Time:', n.substring(16,21))
            }
            if(!match){
                res.json({message: 'password ไม่ถูกต้อง', errorPassword: 'error'})
                console.log('password ไม่ถูกต้อง')
            }
        }else{
            res.json({message: 'email ไม่ถูกต้อง', errorEmail: 'error'})
            console.log('email ไม่ถูกต้อง')
        }
        await conn.commit()
    } catch (error) {
        await conn.rollback();
        return next(error)
    }
})

exports.router = router;
