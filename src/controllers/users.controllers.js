import { userModel } from '../database_models/databaseModels.js';
import bcrypt from 'bcrypt';

export const indexUsers = async (req, res) => {
    try {
        const users = await userModel.find({});
        if (users.length === 0) {
            return res.json({ message: 'No hay usuarios registrados' });
        }
        return res.json({ users });
    } catch (error) {
        console.log('Error: ', error);
        return res.status(500).json({ error: 'Server error' });
    }
    }

export const storeUsers = async (req, res) => {
    const {name, lastname, email, password} = req.body;
    if (!name || !lastname || !email || !password) {
        const missingArguments = [];
        if (!name) {
            missingArguments.push('name');
        }
        if (!lastname) {
            missingArguments.push('lastname');
        }
        if (!email) {
            missingArguments.push('email');
        }
        if (!password) {
            missingArguments.push('password');
        }
        return res.status(400).json({ error: 'Missing arguments', missingArguments });
    }
    let passHash = await bcrypt.hash(password, 10);
    try {
        const existUser = await userModel.findOne({email});
        if (existUser) {
            return res.status(400).json({ error: 'User already exists' });
        }
        const user = new userModel({name, lastname, email, password: passHash});
        const save = await user.save();
        return res.status(201).json({ user: save });
    } catch (error) {
        console.log('Error: ', error);
        return res.status(500).json({ error: 'Server error' });
            }
    }    