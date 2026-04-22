import Reservation from '../models/Reservation.js';

// Create a reservation
export const createReservation = async (req, res, next) => {
    try {
        const newReservation = new Reservation(req.body);
        const savedReservation = await newReservation.save();
        res.status(201).json(savedReservation);
    } catch (error) {
        next(error);
    }
};

// Get all reservations
export const getReservations = async (req, res, next) => {
    try {
        const reservations = await Reservation.find().sort({ createdAt: -1 });
        res.status(200).json(reservations);
    } catch (error) {
        next(error);
    }
};

// Delete a reservation
export const deleteReservation = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deletedReservation = await Reservation.findByIdAndDelete(id);
        
        if (!deletedReservation) {
            return res.status(404).json({ message: 'Reservation not found' });
        }
        res.status(200).json({ message: 'Reservation cancelled successfully', id });
    } catch (error) {
        next(error);
    }
};
