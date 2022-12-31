const express = require('express')
const app = express()

const bodyParser = require('body-parser')
const cors = require('cors')
const { router } = require('./routes')
const { initDatabase } = require('./schemas')
const HOST='localhost'
const PORT = 3000

const start = async () => {
    app.use(cors)
    app.use(bodyParser.json());

    await initDatabase()

    app.use('/', router)

    app.listen(PORT, HOST, () => {
        console.log(`APP LISTEN AT http://${HOST}:${PORT}`)
    })
}

start()
