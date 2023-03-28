const bcrypt = require('bcrypt')
const User = require('../models/User')
exports.signUp = (req, res, next) => {
    const {email, firstName, lastName, password, passwordMatch} = req.body;
    console.log(req.body)
    let specialCharacter = /^((?=.*[0-9])(?=.*[а-я])(?=.*[А-Я]).{8,})|((?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,})$/
    if (password.search(specialCharacter)) return res.status(401).json({successSignUp: false})
    if (password !== passwordMatch) return res.status(401).json({successSignUp: false})

    bcrypt.hash(password, 10).then((hash) => {
        new User({
            firstName: firstName,
            lastName: lastName,
            mail: email,
            password: hash
        }).save().then(  () => {
            res.status(200).json({successSignUp: true})
        }).catch(err => {
            if (err) {
                res.status(401).json({successSignUp: false})
            }
        });


    });
}
exports.signIn = (req, res, next) => {

}

exports.requirePassword = (req, res, next) => {
    try {
        let re = /^((?=.*[0-9])(?=.*[а-я])(?=.*[А-Я]).{8,})|((?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,})$/
        const password = req.body.password;
        if (password.search(re)) return res.status(401).json({message: 'Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters'})
        res.status(200).json({message: false})

    } catch (err) {
        console.log(err)
    }

}
exports.requireMatch = (req, res, next) => {
    try {
        const  {password, repeatPassword} = req.body
        console.log(password, repeatPassword)
        if (password !== repeatPassword) return res.status(401).json({message: 'Please match the request format'})
        res.status(200).json({message: false})

    }
    catch (err) {
        console.log(err)
    }

}