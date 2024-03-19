const UserRouter = require('./UserRouter');
const TourRouter = require('./TourRouter');
const BookingRouter = require('./BookingRouter');
const PaymentRouter = require('./PaymentRouter');

const routes = (app) => {
    app.use('/api/user', UserRouter);
    app.use('/api/tour', TourRouter);
    app.use('/api/booking',BookingRouter);
    app.use('/api/payment',PaymentRouter);
};

module.exports = routes;
