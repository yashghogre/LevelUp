const jwt = require('jsonwebtoken')
const User = require('./../Models/userSchema')

const authenticate = async (req, res, next) => {
    try {
        const token = req.cookies.jwtoken
        const verifyToken = jwt.verify(token, process.env.SECRET_KEY)

        const rootUser = User.findOne({ _id: verifyToken._id})

        if (!rootUser) {
            throw new Error('User not found')
        }
        else {
            req.token = token
            req.rootUser = rootUser
            req.userID = rootUser._id

            next()
        }

    } catch (error) {
        res.status(401).json({ 'message': 'unauthorized: No Token Provided' })
        console.log(error);
    }
}

module.exports = authenticate