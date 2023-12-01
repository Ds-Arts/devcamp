const jwt = require('jsonwebtoken')
const userModel = require('../models/userModel')
//middleware proteger rutas
//usuarioa no logueados

exports.protect= async(req,res,next) => {
try {
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
                success:false,
                message:"USUARIO NO AUTORIZADO"
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

} catch (error) {
    res.status(500).json({
        success:false,
        msg: error.message
    })
}

}


//middleware para proteger usuarios con un rol especifico
exports.authorize=(role) => {
    return async(req,res,next) =>{
        //comparar si el tol del parametro dado  es igual al rol del usuario
        if (req.user.role !== role ) {
            res
            .status(401)
            .json({
                success:false,
                msg: "ROL NO AUTORIZADO"
            })
        } else {
            next()
        }
    }
}