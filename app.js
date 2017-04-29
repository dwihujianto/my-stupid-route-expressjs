const express = require('express')

const app = express()

/* Work without import express on sub module */

const user = require('./src/user')(express)
app.use('/user',user)

/* Alternative */

const Human = require('./src/human')
const human = new Human()


app.get('/human',human.root)
app.get('/human/coba',human.coba)

app.listen(3000,() => {
	console.log(`Magic come from localhost:3000`)
})
