const User = require('../models/user')
const jwt = require('jsonwebtoken');


exports.signup = (req, res) => {
    User.findOne({ email: req.body.email })
        .exec((err, user) => {
            if (user) return res.status(400).json({
                message: 'admin alredy registred'
            })
            const { firstName, lastName, email, password } = req.body;
            const _user = new User({
                firstName,
                lastName,
                email,
                password,
                username: Math.random().toString(),
                role:"user"
            })

            _user.save((err, data) => {
                if (err) {
                    return res.status(400).json({
                        message: 'Something went wrong'
                    })
                } if (data) {
                    return res.status(201).json({
                        message: "User succfully created"
                    })
                }
            })
        })
}




exports.signin = (req, res) => {
    User.findOne({ email: req.body.email })
        .exec((err, user) => {
            if (err) return res.status(401).json({err});
            if (user) {
                if(user.authenticate(req.body.password)&& user.role ==='user'){
                    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' })
                    const  {_id, firstName, lastName, email, role, fullName } = user
                    res.status(200).json({
                        token,
                        user: {_id, firstName, lastName, email, role, fullName}
                    })
                }

            } else {
                return res.status(400).json({ message: 'some thing went wrong' })
            }
        })
}


