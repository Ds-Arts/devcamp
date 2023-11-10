const express= require('express')

const ReviewModel = require('../models/reviewModel')

const router =  express.Router()

//traer todos los cursos
router.get("/", async (req, res)=>{
    //utilizar el modelo para seleccionar todos los bootcamps en la base de datos
    const reviews =
        await ReviewModel.find()
    
    res.json({
        success:true,
        data: reviews
    })
})


//traer cursos por id
router.get("/:id", async (req, res)=>{

    //del parametro de la url
    reviewId = req.params.id
    const review = 
        await    ReviewModel.findById(reviewId)

    res.json({
        success:true,
        data: review
    })
})


//crear un curso
router.post("/", async (req, res)=>{
    //el nuevo bootcamp vendra al servidor
    //a traves del body del cliente
    const newReview =
        await ReviewModel.create(req.body)

    res.json({
        success:true,
        data: newReview
    })
})


//modificar cursos cursos por id
router.put("/:id", async (req, res)=>{
    
    const reviewId = req.params.id
    const updReview= 
        await ReviewModel.findByIdAndUpdate(
            reviewId,
            req.body,
            {
                new: true
            })
    res.json({
        success:true,
        data: updReview
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

    const reviewId = req.params.id
    const delReview= 
    await ReviewModel.findByIdAndDelete(
        reviewId
        )
    res.json({
        success:true,
        data: delReview
    })
})

module.exports = router