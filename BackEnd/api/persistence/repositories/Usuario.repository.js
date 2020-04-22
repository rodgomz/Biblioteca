const UsuarioSchema= require("../schemas/Usuario.schema");

class UsuarioRepository{
    async findAll(){
        let usuario=await UsuarioSchema.find();
        return usuario;
    }

    async findById(idUsuario){
        let usuario = await UsuarioSchema.findOne({_id: idUsuario});
        return usuario;
    }

    async create(usuario){
        usuario = new UsuarioSchema(usuario);
        let usuarioGuardado= await usuario.save();
        return usuarioGuardado;
    }

    async delete (idUsuario){
        let usuario= await this.findById(idUsuario);
        if(usuario){
            await usuario.remove();
        }else{
            throw Error(`Producto ${idUsuario} no encontrado`);
        }
    }

    async update(usuarioEditado){
        let usuario= await this.findById(usuarioEditado._id);
        if(usuario){
            usuario.nombre=usuarioEditado.nombre;
            usuario.apellido=usuarioEditado.apellido;
            usuario.contra=usuarioEditado.contra;
            usuario.activo=usuarioEditado.activo;
            usuario.tipo=usuarioEditado.tipo;
            usuario.matricula=usuarioEditado.matricula;
            usuario.telefono=usuarioEditado.telefono;
            usuario.email=usuarioEditado.email;
            usuario.carrera=usuarioEditado.carrera;
            usuario.cuatrimestre=usuarioEditado.cuatrimestre;
            usuario.grupo=usuarioEditado.grupo;
            return await usuario.save();
        }else{
            throw Error(`Producto ${usuarioEditado._id} no encontrado`);
        }
    }
}
module.exports = UsuarioRepository;