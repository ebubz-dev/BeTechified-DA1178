const express = require('express');
const path = require('path');
const dotenv  = require('dotenv');
dotenv.config();
const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.static(path.join(__dirname, './public'))); // This line auto serves the index.html and all its associated assets
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url} - ${new Date()}`);
    next();
});

app.post('/', (req, res) => res.send('My Week 2 API!'));

app.post('/user', (req, res) => {
    const {name, email} = req.body;
    if (!name || !email) res.status(400).json({error: "Missing Data!"});
    res.status(201).send(`Hello, ${name}!`);
})

app.get('/user/:id', (req, res) => {
    res.send(`User ${req.params.id} profile`);
})

app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});