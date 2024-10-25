const mongoose = require('mongoose');
const { Schema } = mongoose;

//Schema
const productSchema = new Schema({
    title: {type:String, required:true, unique:true},  // String is shorthand for {type: String}
    description: String,
    price: Number,
    discountPercentage: {type:Number, max:[50,'maximum discount can be 50'], required:true},
    rating: {type:Number, min:[0,'minimum rating can be 0'], max:[5,'maximum rating can be 5'],default:0},
    stock: Number,
    brand: {type:String, required:true},
    category: {type:String, required:true},
    thumbnail: String,
    images: [ String ]
});

// Export the model
module.exports = mongoose.model('Trial', productSchema);