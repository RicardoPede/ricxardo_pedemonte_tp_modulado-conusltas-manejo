import mongoose from "mongoose"

export const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    yearPublicated: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Author'
    },
    frontPage: {
        type: String,
        required: true
    }
})