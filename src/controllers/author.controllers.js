import { authorModel } from '../database_models/databaseModels.js';

export const indexAuthors = async (req, res) => {
    try {
        const authors = await authorModel.aggregate([{
            $lookup: {
                from: 'books',
                localField: '_id',
                foreignField: 'author',
                as: 'books'
            }
        }]);
        if (authors.length === 0) {
            return res.json({ message: 'No hay autores registrados' });
        }
        return res.json({ authors });
    } catch (error) {
        console.log('Error: ', error);
        return res.status(500).json({error: 'Server error'});
    }
    };

export const storeAuthor = async (req, res) => {
    try {
        const {name, lastname, biography, } = req.body;
        if (!name) {
            return res.status(400).json({ error: 'Missing name argument' });
        }
        if (!lastname) {
            return res.status(400).json({ error: 'Missing lastname argument' });
        }
        if (!biography) {
            return res.status(400).json({ error: 'Missing biography argument' });
        }
        const existAuthor = await authorModel.findOne({name, lastname});
        if (existAuthor) {
            return res.status(400).json({ error: 'Author: Firstname Lastname exists' });
        }
        const author = new authorModel({name, lastname, biography});
        const save = await author.save();
        return res.status(201).json({ author: save });
    } 
    catch (error) {
        console.log('Error: ', error);
        return res.status(500).json({error: 'Server error'});
    }
}