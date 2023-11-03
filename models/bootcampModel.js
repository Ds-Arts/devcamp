const mongoose = require('mongoose')

//definir un schema bootcamp
const BootcampSchema = new mongoose.Schema(
    {
        "name": {            
            type: String,
            unique: true,
            required: [true,
            "Nombre requerido"]
        }
        ,
        "phone":{            
            type: Number,
            required: [
                true,
                "Telefono requerido"],
            maxlength:[
                10,
                "telefono debe de ser de 10 digitos"],
            minlength:[
                9,
                "telefono debe de ser de 10 digitos"                
            ]
        },
        "address":{
            type: String,
            required:[
                true,
                "direccion requerida"
            ]
        },
        "topics":{
            type: [ String ],
            enum:
            [
                "Backend",
                "Frontend",
                "Devops",
                "AI"
            ]
        },
        "createdAt":{
            type:Date,
            required:[true,"fecha requerida"]
        } 
    }
)

module.exports = mongoose.model("Bootcamp", 
                                BootcampSchema)