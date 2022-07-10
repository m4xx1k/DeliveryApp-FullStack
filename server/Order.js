import mongoose from "mongoose";

const Order = new mongoose.Schema({
    phone: {type: String, required: true},
    email: {type: String, required: true},
    adress: {type: String, required: true},
    name: {type: String, required: true},
    totalSum: {type: Number, required: true},
    goods: {type:Object, required: true},
    id: {type: Number, required: true}
})

export default mongoose.model("Order", Order)