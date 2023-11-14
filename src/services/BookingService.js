const Booking = require('../models/BookingModel')

// createTour
const createBooking = (newBooking, tourId) => {
    return new Promise( async (resolve, reject) => {
        const { TourR,
            registerName,
            registerEmail,
            registerPhone,
            registerAddress,
            quantity,
            payPrice,
            customerFirstName,
            customerLastName } = newBooking;
        try {
            // const checkTour = await Tour.findOne({
            //     _id: tourId
            // })

            
            const newBooking = await Booking.create({ 
                TourR : tourId,
                registerName,
                registerEmail,
                registerPhone,
                registerAddress,
                quantity,
                payPrice,
                customerFirstName,
                customerLastName })
            if(newBooking) {
                resolve({
                    status: 'Success',
                    data: newBooking
                })
            }   
        }catch (error) {
            reject(error);
        }
    })
}; 

    const getBookedTour = (email) => {
        return new Promise( async (resolve, reject) => {
            try {
                const checkEmail = await Booking.find({
                    registerEmail: email
                })
        
                // if(checkEmail.length === 0) {
                //     resolve({
                //         status: 'OK',
                //         message: 'The booking is not defined'
                //     })
                // }

                console.log(checkEmail)

                resolve({
                    status:'OK',
                    message:'Success',
                    checkEmail
                })
            } catch (error) {
                reject(error);
            }
        })
    }

module.exports = {
    createBooking,
    getBookedTour
}