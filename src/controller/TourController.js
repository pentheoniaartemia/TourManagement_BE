const TourService = require('../services/TourService');
const fs = require('fs');


// Create Tour  
const createTour = async (req, res) => {
    try {
        const {nameTour, imageTour, typeTour, departurePlace,  departureDate, departureTime, 
            travelDate, adultPrice, teenPrice, childrenPrice, infantPrice, quantity, transport, visitedPlace, food, hotel, 
            suitableObject, saleDescription
            , salePercent} = req.body;

        // if(!nameTour){
        //     return res.status(200).json({
        //         status: 'ERR',
        //         message: 'Hãy nhập tên tour du lịch'
        //     })
        // } else if(!departureDate) {
        //     const currentDate = new Date(); // Lấy ngày hiện tại
        //     const formattedDate = currentDate.toISOString().split('T')[0]; // Chuyển đổi thành chuỗi ngày tháng
        //     //ví dụ: "2023-10-15T15:30:00.000Z") và .split('T')[0] chỉ lấy phần ngày (ví dụ: "2023-10-15").

        //     req.body.departureDate = formattedDate; // Gán ngày hiện tại vào departureDate

        // } else if(!departureTime){
        //     const currentTime = new Date(); // Lấy thời gian hiện tại
        //     const formattedTime = currentTime.toISOString().split('T')[1].split('.')[0]; // Chuyển đổi thành chuỗi thời gian

        //     req.body.departureTime = formattedTime;
        // } else if(!travelDate){
        //     return res.status(200).json({
        //         status: 'ERR',
        //         message: 'Hãy nhập thời gian tour'
        //     })
        // } else if(!adultPrice){
        //     return res.status(200).json({
        //         status: 'ERR',
        //         message: 'Hãy nhập giá tour du lịch'
        //     })
        // } else if(!quantity){
        //     return res.status(200).json({
        //         status: 'ERR',
        //         message: 'Hãy nhập số lượng tour du lịch'
        //     })
        // } else if(!departurePlace){
        //     return res.status(200).json({
        //         status: 'ERR',
        //         message: 'Hãy nhập điểm khởi hành của tour du lịch'
        //     })
        // } else if(!visitedPlace){
        //     return res.status(200).json({
        //         status: 'ERR',
        //         message: 'Hãy nhập điểm đến của tour du lịch'
        //     })
        // } else if(!transport){
        //     return res.status(200).json({
        //         status: 'ERR',
        //         message: 'Hãy nhập phương tiện di chuyển'
        //     })
        // }
        const respond = await TourService.createTour(req.body);
        
        return res.status(200).json(respond);
    } catch(error) {
        return res.status(400).json({
            message: error
        });
    }
}

// update Tour 
const updateTour = async (req, res) => {
    try {
        const tourId = req.params.id
        const data = req.body

        if(!tourId){
            return res.status(200).json({
                status: 'ERR',
                message: 'Hãy nhập id tour'
            })
        }
        const response = await TourService.updateTour(tourId, data)

        return res.status(200).json(response)

    }catch(error) {
        return res.status(404).json({
            message: error
        });
    }
}

// detail Tour 
const detailTour = async (req, res) => {
    try {
        const tourId = req.params.id

        if(!tourId){
            return res.status(200).json({
                status: 'ERR',
                message: 'Lỗi'
            })
        }
        const response = await TourService.detailTour(tourId)

        return res.status(200).json(response)

    }catch(error) {
        return res.status(404).json({
            message: error
        });
    }
}

// delete Tour 
const deleteTour = async (req, res) => {
    try {
        const tourId = req.params.id

        if(!tourId){
            return res.status(200).json({
                status: 'ERR',
                message: 'Lỗi'
            })
        }
        const response = await TourService.deleteTour(tourId)

        return res.status(200).json(response)

    }catch(error) {
        return res.status(404).json({
            message: error
        });
    }
}

// list Tour 
const listTour = async (req, res) => {
    try {
        const response = await TourService.getListTour()
        return res.status(200).json(response)

    }catch(error) {
        return res.status(404).json({
            message: error
        });
    }
}


module.exports = {
    createTour,
    updateTour,
    detailTour,
    deleteTour,
    listTour
}