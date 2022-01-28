//imports
const express = require('express')
const app = express()
const port = 3000

//Static files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/img'))

app.get('', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
})


//Listen port 3000
app.listen(port, () => console.info('Escuchando puerto ' + port))