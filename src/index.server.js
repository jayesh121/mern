const express = require('express')
const app = express()
const env = require('dotenv')
const mongoose = require('mongoose');
const adminRoute = require('./routes/admin/auth')
const authRoutes = require("./routes/auth");

const categroy = require("./routes/category.js")

env.config();
app.use(express.json())

mongoose.connect(
    'mongodb+srv://hello:1234@cluster0.xol1d.mongodb.net/MERN?retryWrites=true&w=majority',
    {    useNewUrlParser: true,
         useUnifiedTopology: true,
         useCreateIndex:true
    }).then(() => {
        console.log('database is connected')
    })


app.use('/api',adminRoute )
app.use('/api',authRoutes )
app.use('/api',categroy )







app.listen(process.env.PORT, () => {
    console.log(`server is runinng  ${process.env.Port}`)
})