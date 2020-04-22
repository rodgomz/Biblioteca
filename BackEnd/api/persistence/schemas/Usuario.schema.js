const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const UsuarioSchema = new Schema({
    nombre:{type:String, required:true},
    apellido:{type:String, required:true},
    contra:{type:String, required:true},
    activo:{type:Boolean, required:true},
    tipo:{type:String, required:true},
    matricula:{type:String, required:true},
    telefono:{type:String, required:true},
    email:{type:String, required:true, unique: true},
    carrera:{type:String, required:true},
    cuatrimestre:{type:String, required:true},
    grupo:{type:String, required:true},
    librosprestados:{type:Number, required:true}
}, { versionKey: false });

module.exports = mongoose.model("usuario",UsuarioSchema,"usuario");
