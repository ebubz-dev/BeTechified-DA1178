const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.PORT

app.use(express.json())

app.get('/', (req, res) => res.send("Welcome to User API!"))

app.post('/register', (req, res) => {
    const {name, email} = req.body
    if (!name || !email) res.status(400).json({error: "Missing Fields!"})
    res.status(201).json({message: `Registered: ${name} ${email}`})
})

app.get('/user/:id', (req, res) => {
    res.json({id: req.params.id, name: "sample user"})
})

app.listen(port, () => {
    console.log(`app listening on port ${port}`)
});