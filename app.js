require('dotenv').config()
const express = require('express')
const app = express()
const connectDB = require('./config/db')
const cors = require('cors')

app.use(cors())

app.use(express.urlencoded({ extended:false }))

connectDB()

app.get('/',(req,res)=>{
    res.send('You are going to build an awesome backend')
})

app.use('/characters',require('./controllers/characters'))
app.use('/orders',require('./controllers/orders'))

const PORT = process.env.PORT || 3000
app.listen(PORT,()=>{
    console.log(`You are connected on PORT ${PORT}`);
})