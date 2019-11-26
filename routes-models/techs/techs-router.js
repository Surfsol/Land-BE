const router = require('express').Router()
const TechModel = require('./techs-models')

router.get('/', (req, res)=>{
    TechModel.findAll()
    .then(tecs => {
        res.json(tecs)
    })
    .catch(err => res.send(err))
})

router.post('/', (req, res) => {
    const newTech = req.body
    TechModel.add(newTech)
    .then(tec =>{
        res.status(201).json(tec)
    })
    .catch(err => res.send(err))
})

module.exports = router