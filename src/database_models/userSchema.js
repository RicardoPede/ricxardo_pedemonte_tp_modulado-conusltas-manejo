import mongoose from "mongoose";

const ROLE = {
    USER: 'user',
    ADMIN: 'admin'
}

export const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        notEmpty: {errorMessage: "Debe incluir un email"
        },
        isEmail: {errorMessage: "No es un email válido"
        },
        required: true
    },
    password: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    role: {
        type: String,
        enum: Object.values(ROLE),
        default: ROLE.USER
    }
})