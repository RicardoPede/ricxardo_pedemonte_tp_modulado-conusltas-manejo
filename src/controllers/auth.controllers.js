import { authenticate } from '../helpers/jsonwebtoken.js';
import { storeUsers } from './users.controllers.js';
import bcrypt from 'bcrypt';

export const ctrolRegister = async (req, res, next) => {
    try {
        const user = await storeUsers(user);
        const token = await authenticate({user: user.id})
        if (user) {
            return res.status(200).json({ token, message: 'user created' });
        }
    }
    catch (error) {
        console.log('Error: ', error);
        return res.status(500).json({ error: 'Server error' });
    }
}

export const ctrolLogin = async (req, res, next) => {
    try {
        const user = await storeUsers(email, password);
        if (!user) {
            return null
        }
        const passwordValid = await bcrypt.compare(password, user.password);
        if (!passwordValid) {
            return null
        }
        const token = await authenticate({user: user.id})
        if (user) {
            return res.status(200).json({ token, message: 'user logged' });
        }
    }
    catch (error) {
        console.log('Error: ', error);
        return res.status(500).json({ error: 'Server error' });
    }
}

export const ctrlLogout = async (req, res, next) => {
    try {
        const token = await authenticate({user: user.id})
        if (user) {
            return res.status(200).json({ token, message: 'user logged out' });
        }
    }
    catch (error) {
        console.log('Error: ', error);
        return res.status(500).json({ error: 'Server error' });
    }
}