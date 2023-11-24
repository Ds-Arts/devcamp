const jwt = require('jsonwebtoken')
const userModel = require('../models/userModel')
//middleware proteger rutas
//usuarioa no logueados

exports.protect= async(req,res,next) => {

    let token 
    //1. verificar si existe el header 'authorization'
    if(req.headers.authorization && 
        req.headers.authorization.startsWith('Bearer') ){
        
        token = req.
                headers.
                authorization.
                split(' ')[1]
    
    }
    if(!token){
        return  res
                .status(401)
                .json(
            {
                uccess:false,
                message:"token invalido"
            }
        )
    }else{
        const decoded= jwt.verify(token, process.env.JWT_SECRET_KEY)
        //console.log(decoded)
        //añadir al request el "user"
        req.user = await userModel.findById(decoded.id)
        //redirigir al de crear bootcamps
        next()
        
    }
}


//middleware para proteger usuarios con un rol especifico
exports.authorize= async(req,res,next) => {

}