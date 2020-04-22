const express= require("express");
const router = express.Router();

const UsuarioController=require("../api/controllers/Usuario.controllers");

const usuarioController= new UsuarioController();

/************************* Usuarios **********************/
router.get("/usuario",usuarioController.findAll);  
router.get("/usuario/:idUsuario",usuarioController.findById);
router.post("/usuario",usuarioController.create);
router.delete("/usuario/:idUsuario",usuarioController.delete);
router.put("/usuario",usuarioController.update);

    
router.get("/",(req,res)=>{
        res.send("Hola,Sean Todos Bienvenidos Hijos del Rock and Roll !!!!... los saludan los aliados de la noche  en express");
});
    
module.exports=router;