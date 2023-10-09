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
        if (!name || !lastname || !biography) {
            const missingArguments = [];
            if (!name) {
                missingArguments.push('name');
            }
            if (!lastname) {
                missingArguments.push('lastname');
            }
            if (!biography) {
                missingArguments.push('biography');
            }
            return res.status(400).json({ error: 'Missing arguments', missingArguments });
        }
        const existAuthor = await authorModel.findOne({name, lastname});
        if (existAuthor) {
            return res.status(400).json({ error: 'Author already exists' });
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

export const updateAuthor = async (req, res) => {
    const authorId = req.params.id;
    const { name, lastname, biography } = req.body;
    try {
        const existAuthor = await authorModel.findById(authorId);
        if (!existAuthor) {
            return res.status(404).json({ error: 'Author not found' });
        }
        existAuthor.name = name;
        existAuthor.lastname = lastname;
        existAuthor.biography = biography;
        const updatedAuthor = await existAuthor.save();
        return res.status(200).json({ author: updatedAuthor });
    } catch (error) {
        console.log('Error: ', error);
        return res.status(500).json({ error: 'Server error' });
    }
}

export const deleteAuthor = async (req, res) => {
    const authorId = req.params.id;
    try {
        const existAuthor = await authorModel.findById(authorId);
        if (!existAuthor) {
            return res.status(404).json({ error: 'Author not found' });
        }
        await existAuthor.remove();
        return res.status(200).json({ message: 'Author deleted successfully' });
    }
    catch (error) {
        console.log('Error: ', error);
        return res.status(500).json({ error: 'Server error' });
    }
}