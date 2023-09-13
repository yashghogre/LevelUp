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

app.post('/test', (req, res) => {
    console.log('This is test')
    res.json({ message: 'This is test' })
})

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})