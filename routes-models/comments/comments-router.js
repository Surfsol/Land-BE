const router = require('express').Router()
const CommentModel = require('./comments-model')

router.get('/', (req, res)=> {
    CommentModel.findAll()
    .then(all => {
        res.status(201).json(all)
    })
})

router.get('/byproject/:id', (req, res)=> {
    const project_id = req.params.id
    CommentModel.findByProject(project_id)
    .then(all => {
        res.status(201).json(all)
    })
    .catch(err => res.send(err))
})

router.post('/', (req, res) => {
    const comment = req.body
    CommentModel.add(comment)
    .then(added => {
        res.status(201).json(added)
    })
    .catch(err => res.send(err))
})

module.exports = router