const express = require("express");
const pool = require("../config");

router = express.Router();

router.post("/checkTokenLogin", async function(req, res, next){

    const conn = await pool.getConnection()
    await conn.beginTransaction();

    try {
        const token = req.body.token
        const role = req.body.role

        const [token_db, notuse1] = await conn.query("SELECT acc_id,token FROM tokens WHERE token = ?", [token])

        if(token == token_db[0].token){
            const [data, notuse2] = await conn.query("SELECT user_studentid FROM user WHERE acc_id = ?", [token_db[0].acc_id])
            const [dataAdmin, notuse3] = await conn.query("SELECT rule_manage_acc, rule_standand_admin FROM admin WHERE acc_id = ?", [token_db[0].acc_id])
            
            if(role == 'Admin' && dataAdmin[0].rule_manage_acc == true || dataAdmin[0].rule_standand_admin == true){
                res.status(200).json({message: "You can pass! (Admin)", rule_manage_acc: dataAdmin[0].rule_manage_acc, rule_standand_admin: dataAdmin[0].rule_standand_admin, id: data[0].user_studentid})
            }
            else if(role == 'User' && dataAdmin[0].rule_manage_acc != true && dataAdmin[0].rule_standand_admin != true){
                res.status(200).json({message: "You can pass! (User)", id: data[0].user_studentid})
            }
            else{res.json({message: "You can't pass!"})}

        }
        else{
            res.status(401).json({message: "Error token You can't pass!"})
        }
        conn.commit()

    } catch (error) {
        await conn.rollback();
        next(error);
    }
    finally{
        conn.release()
    }
})

exports.router = router;
