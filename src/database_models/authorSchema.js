import mongoose from 'mongoose';

export const authorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    biography: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});