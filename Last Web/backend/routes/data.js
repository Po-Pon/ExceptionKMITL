const express = require("express");
const path = require("path")
const pool = require("../config");

router = express.Router();

router.get("/", async function (req, res, next) {
  try {
    const [rows, fields] = await pool.query('SELECT acc_id, acc_fname, acc_lname, acc_email, create_date FROM account');
    return res.json(rows);
  } catch (err) {
    return next(err)
  }
});

exports.router = router;