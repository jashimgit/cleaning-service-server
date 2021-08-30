/* eslint-disable object-curly-newline */
/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
import bcrypt from 'bcrypt';
import models from '../models';

const { User } = models;
// http://localhost:8000/auth/login
export const login = async (req, res) => {
    // console.log(req.body);
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email }).select('-__v');

        const { email: userEmail, userRole, status, photoUrl } = user;
        if (!user) {
            return res.status(404).send({
                message: 'user not exists',
            });
        }
        const validatePassword = await bcrypt.compare(password, user.password);
        if (!validatePassword) {
            return res.status(403).json({
                message: 'User Email or password does not matched',
            });
        }
        return res.status(200).json({
            message: 'success',
            user: { userEmail, userRole, status, photoUrl },
        });
    } catch (err) {
        return res.status(500).json({
            message: err.message,
        });
    }
};

// register method
export const register = async (req, res) => {
    const { body } = req;

    // check this email is already have an account or not
    const userExist = await User.findOne({ email: body.email });
    if (userExist) {
        return res.status(400).json({
            message: 'user already exists',
        });
    }

    // creating a new mongoose doc for user data
    const user = new User(body);
    try {
        // generate salt to hash password
        const salt = await bcrypt.genSalt(10);
        // now we set user password to hashed password
        user.password = await bcrypt.hash(user.password, salt);
        const savedUser = await user.save();
        return res.status(200).json({
            message: 'success',
        });
    } catch (err) {
        return res.status(501).json({
            message: 'user already exists',
        });
    }
};
