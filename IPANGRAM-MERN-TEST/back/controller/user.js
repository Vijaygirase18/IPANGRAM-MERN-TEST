const User = require("../model/user");
const jwt = require('jsonwebtoken');


const Login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const userExist = await User.findOne({ email: email });
        if (userExist) {
            if (userExist.password === password) {
                const token = jwt.sign({ id: userExist._id, email: userExist.email }, 'iconnect_technology');
                res.cookie('token', token);
                res.send({ msg: "Login Successfully", id: userExist._id, user: userExist.name, role: userExist.role, token: token });
            } else {
                res.send({ error: "Password Not Match" })
            }

        } else {
            res.send({ error: "User not Found" });
        }
    } catch (error) {
        console.log({ error: 'something went wrong' });
    }
}

const Register = async (req, res) => {
    try {
        const { email, password, eName, role } = req.body; 

        const isExist = await User.findOne({ email: email });
        if (isExist) {
            res.send({ msg: 'User already exists' });
        } else {
            const newUser = new User({
                email: email,
                password: password,
                eName: eName,
                role: role 
            });

            const result = await newUser.save();
            if (result) {
                res.send({ msg: "User registered successfully" });
            } else {
                res.send({ error: 'User not registered' });
            }
        }

    } catch (error) {
        res.send({ error: 'Something went wrong' });
    }
}

module.exports = { Login, Register };