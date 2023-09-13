const express = require('express')
const cors = require('cors')
const bcryptjs = require('bcryptjs')
const router = express.Router()

require('./../dbConfig/dbConfig')
const User = require('./../Models/userSchema')

router.use(cors())

router.post('/signup', async (req, res) => {

    const { fname, lname, email, password } = req.body;
    // console.log(fname, lname, email, password + ' try via backend')
    console.log(fname)

    // if (!fname || !lname || !email || !password) {
    //     res.status(422).json({ error: 'Please fill the comnplete details' })
    // }
    try {
        const userExist = await User.findOne({ email: email })

        if (userExist) {
            res.status(422).json({ error: "Email already exists" })
        }
        else {
            const user = new User({ fname, lname, email, password })

            const userRegister = await user.save()

            if (userRegister) {
                res.status(201).json({ message: "User registered successfully" })
            }
            else {
                res.status(500).json({ error: "Failed to Register" })
            }
        }

    } catch (error) {
        console.log(error.message + ' via catch backend')
    }
})

router.post('/signin', async (req, res) => {
    const { email, password } = req.body;

    const userExist = await User.findOne({ email: email })

    if (userExist) {

        const doesMatch = await bcryptjs.compare(password, userExist.password)

        if (doesMatch) {
            res.status(200).json({ message: "User Logged in Successfully" })
        }
        else {
            res.status(403).json({ error: "Incorrect Password" })
        }
    }
    else {
        res.status(404).json({ error: "User does not Exist" })
    }

})

module.exports = router