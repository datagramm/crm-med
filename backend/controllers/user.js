const bcrypt = require('bcrypt')
const User = require('../models/User')

exports.signUp = (req, res) => {
    const {email, firstName, lastName, password} = req.body;

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
    if (!user) return  res.status(401).json({successSignIn: false, badEmail: true})

    const dbPassword = user.password;
    bcrypt.compare(password, dbPassword).then( async (match) => {
        if (!match) return  res.status(401).json({successSignIn: false, badPassword: true})
        res.status(200).json({successSignIn: true})

    });

}

