const mongoose = require('mongoose')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userSchema = mongoose.Schema({
    fname: {
        type: String,
        required: true,
    },
    lname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    tokens: [
        {
            token: {
                type: String,
                required: true,
            }
        }
    ]
})

//Password Hashing

userSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        this.password = await bcryptjs.hash(this.password, 12)
    }
    next()
})

//Generating Token

userSchema.methods.generateAuthToken = async function () {
    try {
        let token = jwt.sign({ _id : this._id }, process.env.SECRET_KEY)
        this.tokens = this.tokens.concat({ token: token })
        await this.save()
        return token
    } catch (error) {
        console.log(error)
    }
}

const User = mongoose.model('USER', userSchema)

module.exports = User