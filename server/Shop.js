import mongoose from "mongoose";

const Shop = new mongoose.Schema({
    name: {type: String, required: true},
    id: {type: Number, required: true}
})

export default mongoose.model("Shop", Shop)