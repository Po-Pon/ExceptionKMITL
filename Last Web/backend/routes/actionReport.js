const express = require("express");
const path = require("path")
const pool = require("../config");

router = express.Router();

router.put("/actionReport/nextStatus/:id", async function (req, res, next){
    try{
        const [sociality, notuse1] = await pool.query("SELECT report_form_id,status FROM sociality_report_form WHERE report_form_id = ?" , [req.params.id]);
        const [studying, notuse2] = await pool.query("SELECT report_form_id,status FROM studying_report_form WHERE report_form_id = ?" , [req.params.id]);
        const [scholarship, notuse3] = await pool.query("SELECT report_form_id,status FROM scholarship_report_form WHERE report_form_id = ?" , [req.params.id]);
        const [register, notuse4] = await pool.query("SELECT report_form_id,status FROM register_system_report_form WHERE report_form_id = ?" , [req.params.id]);
        const [environment, notuse5] = await pool.query("SELECT report_form_id,status FROM environment_report_form WHERE report_form_id = ?" , [req.params.id]);
        if(sociality.length != 0){
            if(sociality[0].status == 4){
                await pool.query("UPDATE sociality_report_form SET status = 0 WHERE report_form_id = ?", [req.params.id])
                res.send('update report_id: '+ sociality[0].report_form_id +'success!')
            }
            else{
                await pool.query("UPDATE sociality_report_form SET status = ? WHERE report_form_id = ?", [sociality[0].status+1, req.params.id])
                res.send('update report_id: '+ sociality[0].report_form_id +'success!')
            }
        }
        if(studying.length != 0){
            if(studying[0].status  == 4){
                await pool.query("UPDATE studying_report_form SET status = 0 WHERE report_form_id = ?", [req.params.id])
                res.send('update report_id: '+ studying[0].report_form_id +'success!')
            }
            else{
                await pool.query("UPDATE studying_report_form SET status = ? WHERE report_form_id = ?", [studying[0].status+1, req.params.id])
                res.send('update report_id: '+ studying[0].report_form_id +'success!')
            }
        }
        if(scholarship.length != 0){
            if(scholarship[0].status  == 4){
                await pool.query("UPDATE scholarship_report_form SET status = 0 WHERE report_form_id = ?", [req.params.id])
                res.send('update report_id: '+ scholarship[0].report_form_id +'success!')
            }
            else{
                await pool.query("UPDATE scholarship_report_form SET status = ? WHERE report_form_id = ?", [scholarship[0].status+1, req.params.id])
                res.send('update report_id: '+ scholarship[0].report_form_id +'success!')
            }
        }
        if(register.length != 0){
            if(register[0].status  == 4){
                await pool.query("UPDATE register_system_report_form SET status = 0 WHERE report_form_id = ?", [req.params.id])
                res.send('update report_id: '+ register[0].report_form_id +'success!')
            }
            else{
                await pool.query("UPDATE register_system_report_form SET status = ? WHERE report_form_id = ?", [register[0].status+1, req.params.id])
                res.send('update report_id: '+ register[0].report_form_id +'success!')
            }
        }
        if(environment.length != 0){
            if(environment[0].status  == 4){
                await pool.query("UPDATE environment_report_form SET status = 0 WHERE report_form_id = ?", [req.params.id])
                res.send('update report_id: '+ environment[0].report_form_id +'success!')
            }
            else{
                await pool.query("UPDATE environment_report_form SET status = ? WHERE report_form_id = ?", [environment[0].status+1, req.params.id])
                res.send('update report_id: '+ environment[0].report_form_id +'success!')
            }
        }
    }catch (err) {
        return next(err)
    }
})

router.put("/actionReport/NotpassStatus/:id", async function (req, res, next){
    console.log(req.params.id)
})

router.delete("/actionReport/delete/:id", async function (req, res, next){
    console.log(req.params.id)
})

exports.router = router;