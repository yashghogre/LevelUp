const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const cors = require('cors')
const PORT = 8080
const app = express()
const cookieParser = require('cookie-parser')
require('./dbConfig/dbConfig')
const User = require('./Models/userSchema')
app.use(cookieParser())

app.use(express.json())

const corsOptions = {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
    credentials: true, // This is important when using credentials like cookies or HTTP authentication.
  };

dotenv.config({ path: './.env' })

app.use(express.json())
app.use(require('./Routes/auth'))
app.use(cors(corsOptions))


// app.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "http://localhost:3000");
//     next();
//   });

app.post('/test', (req, res) => {
    console.log('This is test')
    res.json({ 'message': 'This is test' })
})

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})