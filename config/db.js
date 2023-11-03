const mongoose = require('mongoose')

const conectarDB = async () =>{
    //tambien se puede usar mongodb://127.0.0.1/devcamp-2687386
    await mongoose.connect(process.env.MONGO_URL)
    console.log("mongodb Conectado".bgBlue.red)
}

module.exports = conectarDB