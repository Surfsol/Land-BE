const router = require('express').Router()
const TechsProjectModel = require('./techsProject-model')

const restricted = require('../auth/middleware')

//get by technology
router.get('/:tech', (req, res)=> {
    const name = req.params.tech
    console.log(name)
    TechsProjectModel.findByTech(name)
    .then(all => {
        res.json(all)
    })
    .catch(err => res.send(err))
})

//get all
router.get('/', (req,res) => {
    TechsProjectModel.findAll()
    .then(projects => {
        res.status(200).json(projects)
    })
    .catch(err => res.send(err))
})

//project_id , tech_name
router.post('/', restricted, (req,res) => {
    const newAdd = req.body
    TechsProjectModel.add(newAdd)
    .then(added => {
        res.status(201).json(added)
    })
    .catch(err => res.send(err))
})

module.exports= router