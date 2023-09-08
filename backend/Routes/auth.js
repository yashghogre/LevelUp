const express = require('express')
const router = express.Router()

require('./../dbConfig/dbConfig')
const User = require('./../Models/userSchema')

router.get('/', (req, res) => {
    res.send('Hello from Router js')
})

router.post('/register', (req, res) => {
    console.log(req.body)
    res.send('This is the registration route')
})

router.post('/signup', async (req, res) => {

    const { fname, lname, email, password } = req.body;
    // console.log(fname, lname, email, password + ' try via backend')
    console.log(fname)

    if (!fname || !lname || !email || !password) {
        res.status(422).json({ error: 'Please fill the comnplete details' })
    }
    try {
        const userExist = await User.findOne({ email: email })

        if (userExist) {
            return res.status(422).json({ error: "Email already exists" })
        }

        const user = new User({ fname, lname, email, password })

        const userRegister = await user.save()

        if(userRegister) {
            res.status(201).json({message: "User registered successfully"})
        }
        else {
            res.status(500).json({error: "Failed to Register"})
        }

    } catch (error) {
        console.log(error.message + ' via catch backend')
    }
})

module.exports = router