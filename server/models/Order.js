import mongoose from 'mongoose';
export default mongoose.model('Order', new mongoose.Schema({user:{type:mongoose.Schema.Types.ObjectId,ref:'User'},items:[{product:{type:mongoose.Schema.Types.ObjectId,ref:'Product'},qty:Number,price:Number}],total:Number,status:{type:String,default:'created'}},{timestamps:true}));
