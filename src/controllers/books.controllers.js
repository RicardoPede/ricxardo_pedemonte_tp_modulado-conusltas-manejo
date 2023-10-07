import { bookModel } from '../database_models/databaseModels.js';

export const indexBooks = async (req, res) => {
    try {
        const books = await bookModel.find({});
        return res.json({books});
    } catch (error) {
        console.log('Error: ', error);
        return res.status(500).json({error: 'Server error'});
    }
}

export const storeBooks = async (req, res) => {
    try {
        const {title, author} = req.body;
        if (!title || !author) {
            return res.status(400).json({error: 'Book not found'});
        }
        const book = new bookModel({title, author});
        const save = await book.save();
        return res.status(201).json({book: save});
    }   catch (error) {
        console.log('Error: ', error);
        return res.status(500).json({error: 'Server error'});
    }
}