import mongoose from "mongoose";

const Good = new mongoose.Schema({
    price: {type: Number,required: true},
    name: {type: String,required: true},
    shopName: {type: String,required: true},
    id: {type: Number, required: true}
})

export default mongoose.model("Good", Good)