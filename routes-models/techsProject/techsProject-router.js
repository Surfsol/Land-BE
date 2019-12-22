const router = require('express').Router()
const TechsProjectModel = require('./techsProject-model')

router.get('/:tech', (req, res)=> {
    TechsProjectModel.findByTech()
    .then(all => {
        res.json(all)
    })
    .catch(err => res.send(err))
})