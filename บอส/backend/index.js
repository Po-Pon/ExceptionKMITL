const express = require('express')
const app = express()
const path = require('path')
var cors = require('cors')

app.use(cors())
app.use(express.static(path.join(__dirname, 'static')))

const forum = require("./routes/forum")
const getreportform = require("./routes/getreportform")

app.use("/forum", forum);
app.use("/getreportform", getreportform)

app.listen(3000, () => {
    console.log('start By localhost:3000')
})