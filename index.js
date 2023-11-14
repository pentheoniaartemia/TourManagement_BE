const express = require("express");
const dotenv = require('dotenv');
const { default: mongoose } = require("mongoose");
const routes = require('./src/routes');
const cors = require('cors');
const bodyParser = require('body-parser');

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json({limit: '50mb'}));
app.use(express.json({limit: '50mb'}));

routes(app); 

// Kết nối với database
mongoose.connect(process.env.MONGODB_URI)
.then(() => {
    console.log("DB connect successfully");
})
.catch((error) => {
    console.log(error);
})


app.listen(port, () => {
    console.log("Server is running in port: " + port); 
});