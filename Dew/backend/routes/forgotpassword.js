const express = require("express");
const path = require("path")
const pool = require("../config");
const bcrypt = require('bcrypt');
const nodemailer = require("nodemailer");
const { getMaxListeners } = require("process");

router = express.Router();

// coding here !!

router.post("/forgotpassword/sendmail", async function(req, res, next){
    // make random code
    let random_code = String(Math.floor(Math.random()*999999));
    for(i = 0; i < 6; i++){
        if(random_code.length !== 6)
            random_code = '0'+random_code;
    }
    // bcrypt code
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(random_code, salt)
    // emailSend mar
    const emailSend = req.body.email.emailSend
    // conn db
    const conn = await pool.getConnection()
    await conn.beginTransaction();
    try {
        let [rows1, notuse1] = await conn.query("SELECT acc_email FROM account WHERE acc_email = ?", [emailSend])
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth:{
                user: 'exceptionkmitl.service@gmail.com',
                pass: 'exceptionkmitl.1',
            }
        })
    
        var mailOptions = {
            from: 'exceptionkmitl.service@gmail.com',
            to: emailSend,
            subject: 'Change your password',
            text: 'รหัสยืนยันเปลี่ยนพาสเวิร์ด : ' +  random_code
        }
        
        if(rows1.length > 0){
            transporter.sendMail(mailOptions, function(err, info){
                if(err){
                    console.log(err)
                }
                else{
                    console.log('Email sent:' + info.response)
                    res.json({message: 'send success!', code: hashedPassword})
                }
            })
        }
        else{
            res.json({message: 'ไม่พบ Email ในระบบ'})
        }
    } catch (error) {
        await conn.rollback();
        return next(error)
    }

})

router.put("/forgotpassword/checking", async function(req, res, next){
    console.log(req.body.email)
    const emailSend = req.body.email.emailSend
    const Newpassword = req.body.email.Newpassword
    const code = req.body.email.code
    const codeCheck = req.body.email.codeCheck
    // compare code access
    const match = await bcrypt.compare(code, codeCheck);
    // bcrypt NewPassword
    const salt = await bcrypt.genSalt(10)
    const hashedNewPassword = await bcrypt.hash(Newpassword, salt)
    // conn db
    const conn = await pool.getConnection()
    await conn.beginTransaction();
    try {
        if(match){
            await conn.query("UPDATE account SET acc_password = ? WHERE acc_email = ?", [hashedNewPassword,emailSend])
            res.json({message: 'เปลี่ยนรหัสผ่านสำเร็จ'})
            console.log('change password success')
            await conn.commit()
        }
        if(!match){
            res.json({message: 'รหัสยืนยันไม่ถูกต้อง'})
        }
    } catch (error) {
        await conn.rollback();
        return next(error)
    }
})

exports.router = router;
