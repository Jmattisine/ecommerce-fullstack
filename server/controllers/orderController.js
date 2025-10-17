import Order from '../models/Order.js';
export async function create(req,res){const {items}=req.body;const total=items.reduce((a,i)=>a+i.price*i.qty,0);res.status(201).json(await Order.create({user:req.user.id,items,total}))}
export async function mine(req,res){res.json(await Order.find({user:req.user.id}).sort({createdAt:-1}))}
