const express = require('express')
const app = express()

const bodyParser = require('body-parser')
const cors = require('cors')

const start = () => {
    app.listen(3000, ()=>{
        console.log(`APP LISTEN AT PORT 3000`)
    })
}

start()
