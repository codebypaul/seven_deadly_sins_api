const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    name: String,
    members: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Character'
        }
    ]
})
module.exports = mongoose.model('Order',orderSchema)