const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const cors = require('cors')
const PORT = 8080
const app = express()

require('./dbConfig/dbConfig')
const User = require('./Models/userSchema')


dotenv.config({ path: './.env' })

app.use(express.json())
app.use(require('./Routes/auth'))
app.use(cors())
app.use(bodyParser.json())

app.get('/api/home', (req, res) => {
    res.json({ message: 'Hello World!' })
})

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})