const Booking = require('../models/BookingModel')
const Tour = require('../models/TourModel')
const BookingService = require('../services/BookingService')

const createBooking = async(req, res) =>{
    try{
        const tourId = req.params.id;
        const { TourR,
            registerName,
            registerEmail,
            registerPhone,
            registerAddress,
            quantity,
            payPrice,
            customerFirstName,
            customerLastName } = req.body; 
        
        const respond = await BookingService.createBooking(req.body, tourId);

        return res.status(200).json(respond);
    }catch(error){
        return res.status(404).json({
            message: error
        });
    }
}

//get all tour
const getAllBooking = async(req,res) =>{
    try {
        const books = await Booking.find({
            registerEmail: "c@gmail.com"
        });
        return res.status(200).json({status: true,message: "Successful", books})
    } catch (error) {
        return res.status(500).json({success:false,message:"internal server error"});
    }
}

//get single tour
const getBooking = async(req,res) =>{
    const id = req.params.id
    try {
        const book = await Booking.findById(id)
        return res.status(200).json({success:true,message:"Successful", data:book})
    } catch (error) {
        return res.status(404).json({success:false,message:"not found"});
    }
}

// update booking
const updateBooking = async(req,res)=>{
    const id = req.params.id
    try {
        const updateBooking = await Booking.findByIdAndUpdate(id,req.body,{new:true})
        if(!updateBooking){
            return res.status(404).json({ success: false, message: 'Không tìm thấy tour' });
        }
        return res.status(200).json({
            success: true,
            message: 'Cập nhật đặt tour thành công',
            data: updateBooking,
        });
    } catch (error) {
        return res.status(500).json({ success: false, message: 'Lỗi máy chủ nội bộ' });
    }
}
// Delete booking
const deleteBooking = async (req, res) => {
  const id = req.params.id;
  try {
    const deletedBooking = await Booking.findByIdAndDelete(id);

    if (!deletedBooking) {
      return res.status(404).json({ success: false, message: 'Không tìm thấy đặt tour để xóa' });
    }

    return res.status(200).json({
      success: true,
      message: 'Đặt tour đã bị xóa thành công',
      data: deletedBooking,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Lỗi máy chủ nội bộ' });
  }
};
//Booking Count
const bookingCount = async(req,res) =>{
    try {
        const bookingCount = await Booking.countDocuments();
        const books = await Booking.find();
        let travelerCount = 0;
        let adultCount = 0;
        let childCount = 0;
        let babyCount = 0;
        books.forEach((booking) => {
            travelerCount += booking.numberOfTravelers;
            adultCount += booking.numberOfAdult;
            childCount += booking.numberOfChildren;
            babyCount += booking.numberOfBaby;
        });
        return res.json({bookingCount,travelerCount,adultCount,childCount,babyCount})
    } catch (error) {
        return res.status(500).json({ success: false, message: 'Lỗi máy chủ nội bộ' });
    }
}

// Lấy tour của người dùng
const getBookedTour = async(req, res) => {
    try {
        const email = req.query.email;        
        // const response = await BookingService.getBookedTour(email);

        // return res.status(200).json(response);

        const checkEmail = await Booking.find({
            registerEmail: email
        });

        return res.status(200).json({status: true,message: "Successful", checkEmail})
    } catch (error) {
        return res.status(404).json({
            message: error
        });
    }
}

module.exports = {
    createBooking,
    getBooking,
    getAllBooking,
    updateBooking,
    deleteBooking,
    bookingCount,
    getBookedTour
}