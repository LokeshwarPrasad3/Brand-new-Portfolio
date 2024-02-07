import { Schema, model } from "mongoose";

// Custom function to format the date including the day
const formatDateWithDay = () => {
    const date = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

const messageSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        default: formatDateWithDay,   // "Wednesday, February 7, 2024 10:15:23 AM"
        required: true
    }
}, {
    timestamps: true
})

export const messageModel = model("messageModel", messageSchema)