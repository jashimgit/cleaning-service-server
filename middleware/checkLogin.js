import jwt from 'jsonwebtoken';

const checkLogin = (req, res, next) => {
    const { authorization } = req.headers;

    try {
        const token = authorization.split(' ')[1];
        const verifyToken = jwt.verify(token, process.env.KEY);
        const { _id, email } = verifyToken;
        req.userId = _id;
        req.userEmail = email;
        next();
    } catch (err) {
        next('Authentication failed!');
    }
};
export default checkLogin;
