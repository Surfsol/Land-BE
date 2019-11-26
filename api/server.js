const express = require('express')
const server = express()  //create instance of express server
const cors = require('cors')
const helmet = require('helmet')


const proRouter = require('../routes-models/projects/project-routes')


server.use(express.json())// allows express to read .json from body of request
server.use(helmet())
server.use(cors())


server.use('/projects', proRouter)
server.get('/', (req, res) => { res.status(200).json({hello: 'From Server.js'})})

module.exports = server;