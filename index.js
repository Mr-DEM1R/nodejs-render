const express = require('express')

const app = express()

app.get('/',(req,res)=> {
    res.send({name: 'omer' })
})

app.listen(3000)