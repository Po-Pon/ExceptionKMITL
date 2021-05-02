const express = require('express');
const pool = require('../config')
router = express.Router();

router.get('/forum', async function(req, res, next){
    const conn = await pool.getConnection();
    await conn.beginTransaction();

    try{
        let [rows, fields] = await conn.query(
            'SELECT forum_id, forum_topic, forum_type, image_address FROM forum'
        );
        conn.commit()
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

router.get('/:id', async (req, res, next) => {
    const conn = await pool.getConnection();
    await conn.beginTransaction();

    try{
        let [rows, fields] = await conn.query(
            'SELECT forum_topic, forum_description, forum_type, forum_release_date, image_address FROM forum WHERE forum_id=?'
            , [req.params.id]
        );
        conn.commit()
        return res.json(rows);
    }catch(err){
        await conn.rollback();
        console.log(err);
    }finally{
        console.log('finally')
        conn.release();
    }
})

router.delete('/:id', async (req, res, next) => {
    const conn = await pool.getConnection();
    await conn.beginTransaction();

    try{
        await conn.query(
            'DELETE FROM forum WHERE forum_id=?', [req.params.id]
        );
        conn.commit()
        return res.json(rows);
    }catch{
        await conn.rollback();
        console.log(err);
    }finally{
        console.log('finally')
        conn.release();
    }
})

exports.router = router;
