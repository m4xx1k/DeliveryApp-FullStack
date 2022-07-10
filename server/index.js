import express from "express"
import mongoose from "mongoose";
import Order from "./Order.js"
import Shop from "./Shop.js"
import Good from "./Good.js"
import cors from "cors"

const PORT = 5000
const DB_URL = "mongodb+srv://root:root@cluster0.y0cub.mongodb.net/?retryWrites=true&w=majority"
const app = express()
app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
    res.status(200).json("ui")
})

app.post("/orders", async (req, res) => {
    try {
        const {name, phone, email, adress, totalSum, goods, id} = req.body
        const order = await Order.create({name, phone, email, adress, totalSum, goods, id})
        res.json(id)
    } catch (e) {
        res.status(500).json(e)
        console.log(e)
    }

})


app.get("/ordersById", async (req, res) => {
    try {
        const id = req.query.id
        const order = await Order.findOne({id: id})
        res.json(order)
        console.log(order)
    } catch (e) {
        console.log(e)
        res.status(500)
    }

})

app.get("/ordersByPhone", async (req, res) => {
    try {
        const phone = req.query.phone
        const order = await Order.find({phone: phone})
        res.json(order)
    } catch (e) {
        console.log(e)
        res.status(500)
    }
})


app.post("/shops", async (req, res) => {
    const {name, id} = req.body
    const shop = await Shop.create({id, name})
    res.json({id, name})
})

app.get("/shops", async (req, res) => {
    try {
        const shops = await Shop.find()
        res.json(shops)
    } catch (e) {
        res.status(500).json(e)
    }

})

app.post("/goods", async (req, res) => {
    try {
        const {id, name, shopName, price} = req.body
        const good = await Good.create({id, name, shopName, price})
        res.json(good)
    } catch (e) {
        res.status(500)
        console.log(e)
    }
})

app.get("/goods", async (req,res)=>{
    try{
        const shop = req.query.shop
        const goods = await Good.find({shopName: shop})
        res.json(goods)
    }catch (e) {
        res.status(500)
    }

})


const startApp = async () => {
    try {
        await mongoose.connect(DB_URL)
        app.listen(PORT, () => console.log(111))
    } catch (e) {
        console.log(e)
    }
}

startApp()


