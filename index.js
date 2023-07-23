require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan');
const cors = require('cors')

const path = require('path') 

const connectDB = require('./config/dbConn')

const app = express()

const PORT = process.env.PORT || 3500

connectDB()

app.use(morgan('dev'))
// app.use(cors(corsOptions))
app.use(cors())
app.options('*', cors())

app.use(express.json())

// routes
app.use('/stores', require('./routes/storeRoutes'))

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
        console.log(`Hanaye server running on port ${PORT}`);
    })
})


mongoose.connection.on('error', err => {
    console.log(err)
})
