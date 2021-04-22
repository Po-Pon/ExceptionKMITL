const express = require('express');
const pool = require('../config')
router = express.Router();

router.get('/forum', async function(req, res, next){
    const conn = await pool.getConnection();
    await conn.beginTransaction();

    try{
        let [rows, fields] = await conn.query(
            'SELECT forum_id, forum_topic, forum_type, image_address FROM forum, forum_image WHERE forum.forum_id = forum_image.id'
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
exports.router = router;
