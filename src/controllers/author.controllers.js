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
        return res.json({authors});
    } catch (error) {
        console.log('Error: ', error);
        return res.status(500).json({error: 'Server error'});
    }
};

export const storeAuthor = async (req, res) => {
    try {
        const {name, age} = req.body;
        if (!name || !age) {
            return res.status(400).json({error: 'Author not found'});
        }
        const author = await authorModel({name, age});
        const save = await author.save();
        return res.status(201).json({author: save});
    } 
    catch (error) {
        console.log('Error: ', error);
        return res.status(500).json({error: 'Server error'});
    }
}