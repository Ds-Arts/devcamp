const express= require('express')

const CourseModel = require('../models/courseModel')


const router =  express.Router()


//CURSOS

//traer todos los cursos
router.get("/", async (req, res)=>{
    //utilizar el modelo para seleccionar todos los bootcamps en la base de datos
    const cources =
        await CourseModel.find()
    
    res.json({
        success:true,
        data: cources
    })
})


//traer cursos por id
router.get("/:id", async (req, res)=>{

    //del parametro de la url
    CoursecId = req.params.id
    const course = 
        await    CourseModel.findById(CoursecId)

    res.json({
        success:true,
        data: course
    })
})


//crear un curso
router.post("/", async (req, res)=>{
    //el nuevo bootcamp vendra al servidor
    //a traves del body del cliente
    const newCourse =
        await CourseModel.create(req.body)

    res.json({
        success:true,
        data: newCourse
    })
})


//modificar cursos cursos por id
router.put("/:id", async (req, res)=>{
    
    const courseId = req.params.id
    const updCourse= 
        await CourseModel.findByIdAndUpdate(
            courseId,
            req.body,
            {
                new: true
            })
    res.json({
        success:true,
        data: updCourse
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

    const courseId = req.params.id
    const delCourse= 
    await CourseModel.findByIdAndDelete(
        courseId
        )
    res.json({
        success:true,
        data: delCourse
    })
})

module.exports = router