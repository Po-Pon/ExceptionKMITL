const express = require("express");
const path = require("path")
const pool = require("../config");

router = express.Router();

router.get("/", async function (req, res, next) {
  try {
    const [rows, fields] = await pool.query(
      `select a.* , b.user_studentid, b.user_status, c.rule_manage_acc, c.rule_standand_admin
      from account a
      join user b
      on a.acc_id=b.acc_id
      join admin c
      on c.acc_id=b.acc_id`
    );
    return res.json(rows);
  } catch (err) {
    return next(err)
  }
});

exports.router = router;