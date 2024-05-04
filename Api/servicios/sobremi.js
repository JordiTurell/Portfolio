const Sobremi = require('../modelos/sobremi');

async function Create(req){
    const { title, descripcion, id } = req.body
    try{
        //Buscamos si existe alguno para editarlo ya que solamente habra un registro.
        const sobremi = await Sobremi.findOne({ where: {id: id} });
        if(sobremi){
            //Editamos
            sobremi.title = title
            sobremi.descripcion = descripcion
            await sobremi.save()
            return sobremi
        }else{
            const sobremi = await Sobremi.create({title: title, descripcion: descripcion})
            return sobremi
        }
    }catch(error){
        return error
    }
}

async function Get(req){
    try{
        //Buscamos si existe alguno para editarlo ya que solamente habra un registro.
        const sobremi = await Sobremi.findOne();
        if(sobremi){
            return sobremi
        }
        return null
    }catch(error){
        return error
    }
}

module.exports = {
    Create,
    Get
}