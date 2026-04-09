const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    productname: String,
    price: {
        type: Number,
        min: 0 
    }
});

module.exports = mongoose.model("Product", productSchema);