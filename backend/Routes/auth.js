const express = require('express')
const cors = require('cors')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const authenticate = require('./../Middleware/authenticate')
const router = express.Router()
const cookieParser = require("cookie-parser");
router.use(cookieParser());
router.use(express.json())

require('./../dbConfig/dbConfig')
const User = require('./../Models/userSchema')

const corsOptions = {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
    credentials: true, // This is important when using credentials like cookies or HTTP authentication.
};

router.use(cors(corsOptions))

// router.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "http://localhost:3000");
//     next();
// });

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

    const userExist = await User.findOne({ email })

    if (userExist) {

        const doesMatch = await bcryptjs.compare(password, userExist.password)


        if (doesMatch) {
            const token = jwt.sign({ _id: userExist._id }, process.env.SECRET_KEY)
            console.log(token)

            res.cookie("jwtoken", token, {
                // expires: new Date(Date.now() + 60000),
                httpOnly: true,
                secure: true,
                sameSite: 'none'
            }).status(200).send("User Logged in Successfully")
        }
        else {
            res.status(403).json({ 'error': "Incorrect Password" })
        }
    }
    else {
        res.status(404).json({ 'error': "User does not Exist" })
    }

})

// router.options('/dashboard', cors(corsOptions));

router.get('/dashboard', authenticate, (req, res) => {
    console.log('Hello dashboard from server')
    res.send(req.rootUser)
})

module.exports = router