import Express from 'express';
const app = new Express();

import mongoose from 'mongoose';

import authorsRouter from './src/routes/author.routes.js';
import booksRouter from './src/routes/book.routes.js';

const url = 'mongodb://127.0.0.1:27017';

app.use(Express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
})

//Rutas
app.use('/api', authorsRouter);
app.use('/api', booksRouter);

//si la petición no coincide con la ruta, se ejecuta la petición
// app.use((req, res, next) => {
//     const error = new Error('Not found');
//     error.status = 404;
//     next(error);
// })

//Conexión con la base de datos de mongodb
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