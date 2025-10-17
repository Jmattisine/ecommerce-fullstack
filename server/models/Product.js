import mongoose from 'mongoose';
export default mongoose.model('Product', new mongoose.Schema({name:String,description:String,price:Number,image:String,stock:Number}));
