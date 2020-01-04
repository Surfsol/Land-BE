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

router.post('/login', (req, res)=> {
    const {username, password} = req.body

    
    Users.findBy({username})
        .first()
        .then(user => {
            console.log(user)
            if(user && bcrypt.compareSync(password, user.password)){
                //add cookie to existing object, cannot do in insomina
                req.session.username = user.username
                res.status(200).json({message: `Welcome ${username}`})
            } else {
                res.status(401).json({message: "Sorry Invalid Credentials"})
            }
        })
        .catch(error => {
            res.status(500).json({error: "something aint right"})
        })
})
module.exports=router