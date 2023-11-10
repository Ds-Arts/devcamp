const mongoose = require('mongoose')

const CourseSchema = new mongoose.Schema(
    {
        "title":{
            type: String,
            required: [true,
            "Titulo requerido"]
        },
        "description":{
            type: String,
            required: [true,
                "Descripcion requerida"]
        },
        "weeks":{            
            type: Number,
            required: [
                true,
                "semanas requeridas"]
        },
        "tuition":{
            type: Number,
            required: [
                true]          
        },
       "minimumSkil":{
            type: {Number},
            required: [
                true]            
       },
       "created":{
        type: Date,
        required:[true,"fecha requerida"]

        }
    }
)

module.exports = mongoose.model("Course", 
                                CourseSchema)
