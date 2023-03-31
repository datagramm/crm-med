exports.requirePassword = (req, res, next) => {
    try {
        let re = /^((?=.*[0-9])(?=.*[а-я])(?=.*[А-Я]).{8,})|((?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,})$/
        const password = req.body.password;
        if (password.search(re)) return res.status(401).json({message: 'Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters'})
        next()

    } catch (err) {
        console.log(err)
    }

}
exports.requireMatch = (req, res, next) => {
    try {
        const  {password, passwordMatch} = req.body
        console.log(password, passwordMatch)
        if (password !== passwordMatch) return res.status(401).json({message: 'Please match the request format'})
        next()

    }
    catch (err) {
        console.log(err)
    }

}