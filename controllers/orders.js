const router = require('express').Router()
const Order = require('../models/Order')
const Character = require('../models/Character')

// desc
// route
router.get('/', async (req,res)=>{
    try{
        const orders = await Order.find()
        // use .populate('the name of the data field you want to populate all foreign key info of')
        .populate('members')
        .lean()
        res.status(200).json(orders)
    }catch(err){
        console.log(err);
    }
})

// desc
// route
router.get('/:name', async (req,res)=>{
    console.log(req.params.name);
    try{
        const order = await Order.findOne({ name:req.params.name })
        .populate('members')
        .lean()
        res.status(200).json(order)
    }catch(err){
        console.log(err);
    }

})

// desc
// route
router.post('/', async (req,res)=>{
    try{
        const order = await Order.find({name:req.body.orderName})
        let newOrder
        if (!order) newOrder = new Order({ name : req.body.orderName })
        newOrder.save()
        res.status(201).json(newOrder)
    }catch(err){
        console.log(err);
    }
})

// desc
// route
router.put('/', async (req,res)=>{
    console.log(req.body);
    try{
        const order = await Order.findOne({ name:req.body.orderName})
        const character = await Character.findOne({name:req.body.member})
        if (!order.members.includes(character._id)) {
            order.members.push(character._id)
            order.save()
        }
        res.status(204).json(order)
    }catch(err){
        console.log(err);
    }
})

// desc
// route
router.delete('/:name',(req,res)=>{
    res.send(req.params.name,'connected to orders')
})

module.exports  = router