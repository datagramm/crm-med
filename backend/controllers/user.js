const bcrypt = require('bcrypt')
const User = require('../models/User')

exports.signUp = (req, res) => {
    const {email, firstName, lastName, password, passwordMatch} = req.body;
    // console.log(req.body)
    // let specialCharacter = /^((?=.*[0-9])(?=.*[а-я])(?=.*[А-Я]).{8,})|((?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,})$/
    // if (password.search(specialCharacter)) return res.status(401).json({successSignUp: false})
    // if (password !== passwordMatch) return res.status(401).json({successSignUp: false})

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
exports.signIn = async (req, res, next) => {
    const {email, password} = req.body;
    const user = await User.findOne({mail: email});
    if (!user) return  res.status(401).json({successSignIn: false})

    const dbPassword = user.password;
    bcrypt.compare(password, dbPassword).then( async (match) => {
        if (!match) return  res.status(401).json({successSignIn: false})
        res.status(200).json({successSignIn: true})

    });

}

