import jwt from 'jsonwebtoken';
export default (req,res,next)=>{const t=req.header('x-auth-token')||(req.headers.authorization||'').replace('Bearer ','');if(!t)return res.status(401).json({msg:'No token'});try{req.user=jwt.verify(t,process.env.JWT_SECRET||'dev').user;next()}catch(e){res.status(401).json({msg:'Token inválido'})}}
