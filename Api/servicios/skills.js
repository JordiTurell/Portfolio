const Skills = require('../modelos/skills')


async function listar(req){
    return await Skills.findAll({ where: { ghost: false }})
}

async function front(){
    return await Skills.findAll({ where: { ghost: false }})
}

async function create(req){
    
    if(req.body.id == null){
        const skill = await Skills.findOne({ where: { ghost: true} })
        skill.porcentage = req.body.porcentage
        skill.nombre = req.body.nombre
        skill.ghost = false
        skill.save()
    }else{
        const skill = await Skills.findOne({ where: {id: req.body.id} })
        skill.porcentage = req.body.porcentage
        skill.nombre = req.body.nombre
        skill.ghost = false
        skill.save()
    }
}

async function ghost(req){
    let skill = await Skills.findOne({ where: {ghost: true} })
    if(!skill){
        skill = await Skills.create({ nombre: '', porcentage: 0, logo: '', ghost: true })
    }
    return skill
}

async function get(id){
    const skill = await Skills.findOne({ where: {id: id} })
    return skill
}

async function updatefile(req, id){
    const skill = await Skills.findOne({ where: {ghost: true} })
    console.log(req)
    skill.logo = req.filename
    skill.save()
}

module.exports = {
    listar,
    ghost,
    updatefile,
    get,
    create,
    front
}