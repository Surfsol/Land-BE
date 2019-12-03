const router = require('express').Router()
const PtModel = require('./pt.model')

router.get('/', (req,res)=>{
    PtModel.findAll()
    .then(projects => {
        res.json(projects)
    })
    .catch(err => res.send(err))
})


router.post('/', (req,res)=>{
    const body = req.body
    PtModel.add(body)
    .then(pro => {
        res.status(201).json(pro)
    })
    .catch(err => res.send(err))
})


module.exports = router