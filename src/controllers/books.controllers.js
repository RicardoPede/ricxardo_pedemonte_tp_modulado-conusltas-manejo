import { bookModel } from '../database_models/databaseModels.js';

export const indexBooks = async (req, res) => {
    try {
        const books = await bookModel.find({});
        if (books.length === 0) {
            return res.json({ message: 'No hay libros registrados' });
        }
        return res.json({books});
    } catch (error) {
        console.log('Error: ', error);
        return res.status(500).json({error: 'Server error'});
    }
}

export const storeBooks = async (req, res, next) => {
    try {
        const { title, gender, yearPublicated, author } = req.body;
            if (!title || !gender || !yearPublicated || !author ) {
                const missingArguments = [];
            if (!title) {
                missingArguments.push('title');
            }
            if (!gender) {
                missingArguments.push('gender');
            }
            if (!yearPublicated) {
                missingArguments.push('yearPublicated');
            }
            if (!author) {
                missingArguments.push('author');
            }
            if (!req.file) {
                missingArguments.push('file');
            }
            return res.status(400).json({ error: 'Missing arguments', missingArguments });
        }
        const existBook = await bookModel.findOne({title});
            if (existBook) {
                return res.status(400).json({ error: 'Book already exists' });
            }
        const frontPage = req.file.path;
        const book = new bookModel({ title, gender, yearPublicated, author, user: user_id, frontPage: frontPage });
        const savedBook = await book.save();
        return res.status(201).json({ book: savedBook });
    }  catch (error) {
            console.log('Error: ', error);
            return res.status(500).json({ error: 'Server error' });
        }
}