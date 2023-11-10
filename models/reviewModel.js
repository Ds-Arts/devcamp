const mongoose = require('mongoose')

const ReviewSchema = new mongoose.Schema(
    {
        "title":{
            type: String,
            required: [true,
            "Titulo requerido"]
        }, 
        "comment":{
            type: String,
            required: [true,
                "Comentario requerido"]
        },
        "rating":{
            type: Number,
            required: [
                true],
            minlength:[
                1,
                "el rating minimo debe tener un numero"                
            ]
        }
    }
)

module.exports = mongoose.model("Review", 
                                ReviewSchema)