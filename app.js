import cors from 'cors';
import express from 'express';
import connectWithDB from './dbManager/db';
import routes from './routes';

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

const errorHandler = (err, req, res, next) => {
    if (err) {
        res.status(500).json({
            message: err.message,
        });
        next();
    } else {
        res.status(200).json({
            message: 'ok',
        });
        next();
    }
};

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// connect with DB via mongoose
connectWithDB();

// admin routes
// app.use('/admin', (req, res) => {
//     res.send('admin routes');
// });
// review route
app.use('/review', routes.reviewRoute);

// service routes
// app.use('/service', routes.serviceRoute);

// auth routes
app.use('/auth', (req, res) => {
    res.send('auth routes');
});

// error handling middleware
app.use(errorHandler);

// frontpage route
app.get('/', (req, res) => {
    res.send('<h3> Server is Working fine </h3>');
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
