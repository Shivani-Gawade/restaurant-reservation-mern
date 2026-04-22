import mongoose from 'mongoose';

const reservationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        match: [/^\S+@\S+\.\S+$/, 'Invalid email address']
    },
    phone: {
        type: String,
        required: [true, 'Phone number is required']
    },
    date: {
        type: String,
        required: [true, 'Date is required']
    },
    time: {
        type: String,
        required: [true, 'Time is required']
    },
    guests: {
        type: Number,
        required: [true, 'Number of guests is required'],
        min: [1, 'Must have at least 1 guest'],
        max: [20, 'Maximum 20 guests per reservation']
    }
}, { timestamps: true });

export default mongoose.model('Reservation', reservationSchema);
