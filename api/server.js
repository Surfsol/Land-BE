const express = require('express')
const server = express()  //create instance of express server
const CORS = require('cors')
const helmet = require('helmet')


const proRouter = require('../routes-models/projects/project-routes')
const tecRouter = require('../routes-models/techs/techs-router')
const techProjRouter = require('../routes-models/techproj/techInProj-router')
const ptRouter = require('../routes-models/pt/pt-router')
const techsProjectRouter = require('../routes-models/techsProject/techsProject-router')

server.use(express.json())// allows express to read .json from body of request
server.use(CORS())
server.use(helmet())



server.use('/projects', proRouter)
server.use('/tech', tecRouter)
server.use('/techInProject', techProjRouter)
server.use('/pt', ptRouter)
server.use('/techsProject', techsProjectRouter)
server.get('/', (req, res) => { res.status(200).json({hello: 'From Server.js'})})

module.exports = server;