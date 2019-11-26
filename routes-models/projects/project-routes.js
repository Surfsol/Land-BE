const router = require('express').Router()
const ProModel = require('./project-models')

router.get('/', (req, res)=>{
    ProModel.findAll()
    .then(projects => {
        res.json(projects)
    })
    .catch(err => res.send(err))
})

module.exports = router