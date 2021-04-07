const express = require('express');
const pool = require('../config')
const router = express.Router();

router.get('/', async function(req, res, next){
    const conn = await pool.getConnection();
    await conn.beginTransaction();

    try{
        let [rows, fields] = await conn.query(
            'SELECT forum_id, forum_topic, forum_type FROM forum'
        );
        let [rows2, fields2] = await conn.query(
            'SELECT * FROM forum_image'
        )
        conn.commit()
        console.log(rows);
        return res.json({rows, rows2});
    }catch(err){
        await conn.rollback();
        console.log(err);
    }finally{
        console.log('finally')
        conn.release();
    }
});

module.exports = router;
