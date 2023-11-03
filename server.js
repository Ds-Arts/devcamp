const express = require("express")
const dotenv = require("dotenv")
const colors = require('colors')
const conectarDB = require('./config/db')

//dependencias de rutas
const bootcampRoutes = require('./routes/bootcampsRoutes')

//vincular el archivo .env
dotenv.config(
    {path:'./config/.env'}
)

//CONECTAR A DB
conectarDB()

//construir objeto app
const app=express()
//confirmar que le llegara informacion json
app.use(express.json())

//conectar las rutas al objeto app
app.use('/api/v1/devcamp/bootcamps',
        bootcampRoutes)

//CURSOS

//traer todos los cursos
app.get("/courses", (req, res)=>{
    res.json({
        success:true,
        msg:"aqui se mostraran todos los cursos"
    })
})

//traer cursos por id
app.get("/courses/:id", (req, res)=>{
    res.json({
        success:true,
        msg:`aqui se mostrara el curso cuyo id es ${req.params.id}`
    })
})


//crear un curso
app.post("/courses", (req, res)=>{
    res.json({
        success:true,
        msg:"aqui se creara un nuevo curso"
    })
})

//modificar cursos cursos por id
app.put("/courses/:id", (req, res)=>{
    res.json({
        success:true,
        msg:`aqui se modificara el curso cuyo id es ${req.params.id}`
    })
})

//eliminar un curso
app.delete("/courses/:id", (req, res)=>{
    res.json({
        success:true,
        msg:`aqui se eliminara el curso cuyo id es ${req.params.id}`
    })
})


//REVIEWS
//traer todas las reviews
app.get("/reviews", (req, res)=>{
    res.json({
        success:true,
        msg:"aqui se mostraran todas las reviews"
    })
})

//traer review por id
app.get("/reviews/:id", (req, res)=>{
    res.json({
        success:true,
        msg:`aqui se mostrara la review cuyo id es ${req.params.id}`
    })
})

//crear una review
app.post("/reviews", (req, res)=>{
    res.json({
        success:true,
        msg:"aqui se creara una nueva review"
    })
})

//modificar cursos cursos por id
app.put("/reviews/:id", (req, res)=>{
    res.json({
        success:true,
        msg:`aqui se modificara la review cuyo id es ${req.params.id}`
    })
})

//eliminar una review
app.delete("/reviews/:id", (req, res)=>{
    res.json({
        success:true,
        msg:`aqui se eliminara la review cuyo id es ${req.params.id}`
    })
})


//USUARIOS
//traer todos los usuarios
app.get("/users", (req, res)=>{
    res.json({
        success:true,
        msg:"aqui se mostraran todos los usuarios"
    })
})

//traer usuario por id
app.get("/users/:id", (req, res)=>{
    res.json({
        success:true,
        msg:`aqui se mostrara el usuario cuyo id es ${req.params.id}`
    })
})

//crear un usuario
app.post("/users", (req, res)=>{
    res.json({
        success:true,
        msg:"aqui se creara un nuevo usuario"
    })
})

//modificar usuario por id
app.put("/users/:id", (req, res)=>{
    res.json({
        success:true,
        msg:`aqui se modificara el usuario cuyo id es ${req.params.id}`
    })
})

//eliminar una usuario
app.delete("/users/:id", (req, res)=>{
    res.json({
        success:true,
        msg:`aqui se eliminara el usuario cuyo id es ${req.params.id}`
    })
})


//un puerto de ejecucion
app.listen(process.env.PUERTO , ()=>{
    console.log(`Servidor en ejecucion ${process.env.PUERTO}`.bgYellow.green.bold)
})