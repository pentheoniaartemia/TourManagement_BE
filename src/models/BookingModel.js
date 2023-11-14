const mongoose = require('mongoose');
const bookingSchema = new mongoose.Schema(
    {
        TourR: {
            type: String
        },
        registerName: {
            type: String,
            required: true
        },
        registerEmail: {
            type: String,
            required: true
        },
        registerPhone: {
            type: String
        },
        registerAddress: {
            type: String
        },
        quantity: {
            type: Number,
            required: true
        },
        payPrice: {
            type: Number
        },
        customerFirstName: [{
            type: String
        }],
        customerLastName: [{
            type: String
        }]
    }
)

const booking = mongoose.model('Booking', bookingSchema, 'Booking'); 

module.exports = booking; 