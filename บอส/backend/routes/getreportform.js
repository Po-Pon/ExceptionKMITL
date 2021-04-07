const express = require('express');
const pool = require('../config')
const router = express.Router();

router.get('/sociality', async function(req, res, next){
    const conn = await pool.getConnection();
    await conn.beginTransaction()

    try{
        let [rows, fields] = await conn.query(
            "SELECT report_form_topic, problem_description, status, type" + 
            " FROM sociality_report_form, report_form" + 
            " WHERE sociality_report_form.report_form_id=report_form.report_form_id"
        )
        conn.commit();
        console.log(rows);
        return res.json(rows);
    }catch(err){
        await conn.rollback();
        console.log(err);
    }finally{
        console.log('finally')
        conn.release();
    }
});

router.get('/studying', async function(req, res, next){
    const conn = await pool.getConnection();
    await conn.beginTransaction()

    try{
        let [rows, fields] = await conn.query(
            "SELECT report_form_topic, problem_description, status, type" + 
            " FROM studying_report_form, report_form" + 
            " WHERE studying_report_form.report_form_id=report_form.report_form_id"
        )
        conn.commit();
        console.log(rows);
        return res.json(rows);
    }catch(err){
        await conn.rollback();
        console.log(err);
    }finally{
        console.log('finally')
        conn.release();
    }
});

router.get('/scholarship', async function(req, res, next){
    const conn = await pool.getConnection();
    await conn.beginTransaction()

    try{
        let [rows, fields] = await conn.query(
            "SELECT report_form_topic, problem_description, status, type" + 
            " FROM scholarship_report_form, report_form" + 
            " WHERE scholarship_report_form.report_form_id=report_form.report_form_id"
        )
        conn.commit();
        console.log(rows);
        return res.json(rows);
    }catch(err){
        await conn.rollback();
        console.log(err);
    }finally{
        console.log('finally')
        conn.release();
    }
});

router.get('/register', async function(req, res, next){
    const conn = await pool.getConnection();
    await conn.beginTransaction()

    try{
        let [rows, fields] = await conn.query(
            "SELECT report_form_topic, problem_description, status, type" + 
            " FROM register_system_report_form, report_form" + 
            " WHERE register_system_report_form.report_form_id=report_form.report_form_id"
        )
        conn.commit();
        console.log(rows);
        return res.json(rows);
    }catch(err){
        await conn.rollback();
        console.log(err);
    }finally{
        console.log('finally')
        conn.release();
    }
});

router.get('/environment', async function(req, res, next){
    const conn = await pool.getConnection();
    await conn.beginTransaction()

    try{
        let [rows, fields] = await conn.query(
            "SELECT report_form_topic, problem_description, status, type" + 
            " FROM environment_report_form, report_form" + 
            " WHERE environment_report_form.report_form_id=report_form.report_form_id"
        )
        conn.commit();
        console.log(rows);
        return res.json(rows);
    }catch(err){
        await conn.rollback();
        console.log(err);
    }finally{
        console.log('finally')
        conn.release();
    }
});

router.get('/searchbyid/:id', async function(req, res, next){
    const conn = await pool.getConnection();
    await conn.beginTransaction()

    try{
        let [rows, fields] = await conn.query(
            "SELECT type" + 
            " FROM report_form" + 
            " WHERE report_form_id=?",[req.params.id]
        )
        let type = rows[0].type;
        let [rows2, fields2] = [[],[]];
        if(type == "สภาพสังคม"){
            [rows2, fields2] = await conn.query(
                "SELECT problem_description, status, type" + 
                " FROM sociality_report_form, report_form" + 
                " WHERE sociality_report_form.report_form_id=report_form.report_form_id"
                + " AND report_form.report_form_id=?",
                [req.params.id]
            )
        }
        else if(type == "การศึกษา"){
            [rows2, fields2] = await conn.query(
                "SELECT problem_description, status, type" + 
                " FROM studying_report_form, report_form" + 
                " WHERE studying_report_form.report_form_id=report_form.report_form_id"
                + " AND report_form.report_form_id=?",
                [req.params.id]
            )
        }
        else if(type == "ทุนการศึกษา"){
            [rows2, fields2] = await conn.query(
                "SELECT problem_description, status, type" + 
                " FROM scholarship_report_form, report_form" + 
                " WHERE scholarship_report_form.report_form_id=report_form.report_form_id"
                + " AND report_form.report_form_id=?",
                [req.params.id]
            )
        }
        else if(type == "การลงทะเบียนเรียน"){
            [rows2, fields2] = await conn.query(
            "SELECT problem_description, status, type" + 
            " FROM register_system_report_form, report_form" + 
            " WHERE register_system_report_form.report_form_id=report_form.report_form_id"
            + " AND report_form.report_form_id=?",
            [req.params.id]
        )
        }
        else if(type == "สภาพแวดล้อม"){
            [rows2, fields2] = await conn.query(
                "SELECT problem_description, status, type" + 
                " FROM environment_report_form, report_form" + 
                " WHERE environment_report_form.report_form_id=report_form.report_form_id" 
                + " AND report_form.report_form_id=?",
                [req.params.id]
            )
        }
        conn.commit();
        console.log(rows2);
        return res.json(rows2);
    }catch(err){
        await conn.rollback();
        console.log(err);
    }finally{
        console.log('finally')
        conn.release();
    }
});

module.exports = router;