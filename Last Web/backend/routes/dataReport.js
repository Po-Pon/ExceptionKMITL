const express = require("express");
const pool = require("../config");

router = express.Router();

router.get("/dataReport", async function (req, res, next) {
  try {
    const [sociality, notuse1] = await pool.query(`SELECT report_form_id, report_form_date_time, report_form_topic, type, acc_id, user_studentid, status
      FROM report_form JOIN user USING (acc_id)
      JOIN sociality_report_form USING (report_form_id)`);
    const [studying, notuse2] = await pool.query(`SELECT report_form_id, report_form_date_time, report_form_topic, type, acc_id, user_studentid, status
      FROM report_form JOIN user USING (acc_id)
      JOIN studying_report_form USING (report_form_id)`);
    const [scholarship, notuse3] = await pool.query(`SELECT report_form_id, report_form_date_time, report_form_topic, type, acc_id, user_studentid, status
      FROM report_form JOIN user USING (acc_id)
      JOIN scholarship_report_form USING (report_form_id)`);
    const [register, notuse4] = await pool.query(`SELECT report_form_id, report_form_date_time, report_form_topic, type, acc_id, user_studentid, status
      FROM report_form JOIN user USING (acc_id)
      JOIN register_system_report_form USING (report_form_id)`);
    const [environment, notuse5] = await pool.query(`SELECT report_form_id, report_form_date_time, report_form_topic, type, acc_id, user_studentid, status
      FROM report_form JOIN user USING (acc_id)
      JOIN environment_report_form USING (report_form_id)`);
    return res.json({
        report_sociality:sociality,
        report_studying:studying,
        report_scholarship:scholarship,
        report_register:register,
        report_environment:environment
    })
  } catch (err) {
    return next(err)
  }
});

router.post("/", async function (req, res, next) {
    try {
      
    } catch (err) {
      return next(err)
    }
});

exports.router = router;