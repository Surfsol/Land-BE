const router = require('express').Router()
const ProModel = require('./project-models')

const restricted = require('../auth/middleware')

router.get('/', (req, res)=>{
    ProModel.findAll()
    .then(projects => {
        res.json(projects)
    })
    .catch(err => res.send(err))
})

router.post('/', restricted, (req, res) => {
    const newPro = req.body
    ProModel.add(newPro)
    .then(project =>{
        res.status(201).json(project)
    })
    .catch(err => res.send(err))
})

module.exports = router