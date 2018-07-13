var express = require('express')
var app = express()
var port = process.env.PORT || 3001



app.get('/hello', (req, res) => {
    console.log('GEt route hit')
    res.send('Yo')
})

app.listen(port, ()=>{
    console.log(`Server Running on Port: ${port}`)
})