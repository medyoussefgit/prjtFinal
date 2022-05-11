const express = require('express')
const app = express()
const cors = require('cors')
require("dotenv").config();
const connectDB = require("./config/connectDB");
connectDB();
app.use(express.json());
app.use(cors())
app.use("/user", require("./Routes/userRouter"));
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(process.env.port, () => console.log(`Example app listening on port ${process.env.port}!`))