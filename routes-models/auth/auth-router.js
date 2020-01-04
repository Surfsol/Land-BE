const router =require('express').Router()
const bcrypt = require('bcryptjs')
const Users = require('../users/users-model')

router.post('/register', (req, res) => {
    const creds = req.body
    //hash password
    const hashed =bcrypt.hashSync(creds.password, 8)
    creds.password = hashed

    Users.add(creds)
    .then(user => {
        //to login after registration
        req.session.username = user.username
        res.status(201).json(user)
    })
    .catch(err => {
        res.status(500).json(err)})
})
module.exports=router