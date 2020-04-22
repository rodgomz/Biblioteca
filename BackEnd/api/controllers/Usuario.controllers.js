const UsuarioRepository  = require("../persistence/repositories/Usuario.repository");
const usuarioRepo= new UsuarioRepository();

class UsuarioController{

    async findAll(req,res){
        try{
            let Usuario=await usuarioRepo.findAll();
            res.status(200).json(Usuario);
        }
        catch (error){
            console.error(error);
            res.status(500).json(error.message);
        }
    }
    async findById(req,res){
        let idUsuario= req.params.idUsuario;
        let Usuario = await clientesRepo.findById(idUsuario);
 
        if(Usuario)
            res.send(Usuario);
        else
            res.status(404).send(`Cliente ${idUsuario} no encontrado`);
    }
    async create(req,res){
        try{
        let usuario=req.body;
        if(usuario._id || usuario._id===""){
            delete usuario._id;
        }
        let usuarioGuardado=await usuarioRepo.create(usuario);
        res.send(usuarioGuardado);
        }
        catch (error){
            console.error(error);
            res.status(500).json(error.message);
        }
    }
    async update(req,res){
        let usuarioEnviado=req.body;
        try{
            let usuarioGuardado=await usuarioRepoRepo.update(usuarioEnviado)
            res.status(200).json(usuarioGuardado);
        }catch(error){
            console.error(error);
            res.status(500).json(error.message);
        }
    }
    async delete(req,res){
        try{
            let idUsuario= req.params.idUsuario;
            await usuarioRepo.delete(idUsuario);
            res.status(200).json(`Producto ${idUsuario} eliminado`);
        }
    catch(error){
            console.error(error);
            res.status(500).json(error.message);
        }
    }

}

module.exports = UsuarioController;