const router = require('express').Router()
const CommentModel = require('./comments-model')

router.get('/', (req, res)=> {
    CommentModel.findAll()
    .then(all => {
        res.status(201).json(all)
    })
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