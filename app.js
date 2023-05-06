const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

dotenv.config()

const postRoutes = require("./routes/user");


//db
mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("DB Connected!");
})

mongoose.connection.on("error", err => {
    console.log(`DB Connection Error:  ${err.message}`);
});

//middleware
app.use(morgan("dev"));
app.use(express.json());
app.use("/", postRoutes);

const port = process.env.PORT;

app.listen(port, () => {console.log(`node js API is listening on port : ${port}`)});