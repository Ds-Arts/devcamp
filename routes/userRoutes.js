const moongose = require("mongoose")
const express= require('express')

const UserModel = require('../models/userModel')

const router =  express.Router()

//traer todos los cursos
router.get("/", async (req, res)=>{
    //utilizar el modelo para seleccionar todos los bootcamps en la base de datos
    const users =
        await UserModel.find()
    
    res.json({
        success:true,
        data: users
    })
})


//traer cursos por id
router.get("/:id", async (req, res)=>{

    //del parametro de la url
    userId = req.params.id
    const user = 
        await    UserModel.findById(userId)

    res.json({
        success:true,
        data: user
    })
})


//registro de usuarios
router.post("/register", async (req, res)=>{
    try {
        const user = await UserModel.create(req.body)
        res.status(201).json({
            success:true,
            data:user
        })
    } catch (error) {
        res.status(400)
        .json({
            success:false,
            message:error.message
        }) 
    }
})
//Inicio de sesion
router.post("/login", async (req, res)=>{
    // No llega email y password
    //desesructuracion operador spread(...)
    const {email, password}= req.body;
    if(!email || !password){
        return res.status(400).json({
            succes:false,
            message:"falta el email o password"
        })
    }else{
    //El usuario cuyo email es digitado no existe
        const user = await UserModel.findOne({email}).select("+password")
        if(!user){
            return res.status(400).json({
                succes:false,
                message:"El email o la contraseña son incorrectos"
            })
        }else{

            if(await user.compararPassword(password)){
                return res.status(200)
                    .json({
                        success:true,
                        message: "ususario logeado correctamente",
                        data:user
                    })
                
            }else{
                res.status(400).json({
                    succes:false,
                    message:"password incorrecta"
                })
            }
    }
}
}
)

//modificar cursos cursos por id
router.put("/:id", async (req, res)=>{
    
    const userId = req.params.id
    const updUser= 
        await UserModel.findByIdAndUpdate(
            userId,
            req.body,
            {
                new: true
            })
    res.json({
        success:true,
        data: updUser
    })
})

//eliminar un curso
router.delete("/:id", (req, res)=>{
    res.json({
        success:true,
        msg:`aqui se eliminara el curso cuyo id es ${req.params.id}`
    })
})

router.delete("/:id", async (req, res)=>{

    const userId = req.params.id
    const delUser= 
    await UserModel.findByIdAndDelete(
        userId
        )
    res.json({
        success:true,
        data: delUser
    })
})

module.exports = router