import Express from 'express';
const app = new Express();
import mongoose from 'mongoose';
import morgan from 'morgan';

import authRouter from './src/routes/auth.routes.js';
import authorsRouter from './src/routes/author.routes.js';
import booksRouter from './src/routes/book.routes.js';
import userRouter from './src/routes/user.routes.js';

const url = 'mongodb://127.0.0.1:27017';

app.use(Express.json());
app.use(morgan('dev'));

//Rutas
app.use('/', authRouter);
app.use('/', authorsRouter);
app.use('/', booksRouter);
app.use('/', userRouter);

app.use((req, res, next) => {
    return res.status(404).json({
        message: 'Route not found'
    })
})

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Database connected');
        app.listen(8000, () => {
            console.log('Server Listen on http://localhost:8000');
        })
    })
    .catch((err) => {
        console.log(err);
    })