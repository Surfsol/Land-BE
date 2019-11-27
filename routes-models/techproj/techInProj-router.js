const router = require('express').Router()
const tpModel = require('./techInProj-model')

router.get('/', (req, res)=>{
    tpModel.find()
    .then(techs => {
        res.json(techs)
    })
    .catch(err => res.send(err))
})

router.get('/:id', (req, res)=>{
    const tech_id = req.params.id
    tpModel.findByTechId(tech_id)
    .then(techs => {
        res.json(techs)
    })
    .catch(err => res.send(err))
})

router.get('/project/:id', (req, res)=>{
    const project_id = req.params.id
    tpModel.findByProjectId(project_id)
    .then(techs => {
        res.json(techs)
    })
    .catch(err => res.send(err))
})


module.exports= router