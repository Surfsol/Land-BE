const router = require('express').Router()
const TechsProjectModel = require('./techsProject-model')

router.get('/:tech', (req, res)=> {
    const name = req.params.tech
    console.log(name)
    TechsProjectModel.findByTech(name)
    .then(all => {
        res.json(all)
    })
    .catch(err => res.send(err))
})

module.exports= router