const express = require("express");
const cors = require('cors')
const rootRouter = require('backend/routes/index.js')
const app = express();

app.use(cors())
app.use(express.json())

const mainRouter = require('./routes/index');


app.use('/api/v1/', rootRouter)
app.listen(3000)
