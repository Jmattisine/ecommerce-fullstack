import Product from '../models/Product.js';
export async function list(req,res){res.json(await Product.find().sort({createdAt:-1}))}
export async function getOne(req,res){const p=await Product.findById(req.params.id);if(!p)return res.status(404).json({msg:'No encontrado'});res.json(p)}
export async function create(req,res){res.status(201).json(await Product.create(req.body))}
export async function update(req,res){res.json(await Product.findByIdAndUpdate(req.params.id,req.body,{new:true}))}
export async function remove(req,res){await Product.findByIdAndDelete(req.params.id);res.json({ok:true})}
