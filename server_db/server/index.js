require('dotenv').config();
const cors = require('cors');
const getWorlds = require('../database/index.js').getWorlds;
const addWorld = require('../database/index.js').addWorld;
const getWorld = require('../database/index.js').getWorld;
const express = require('express');
const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/app', (req, res) => {
  console.log(req.query)
  getWorlds(req.query.username).then((data) => {
    res.send(data);
  })
})
app.get('/world', (req, res) => {
  getWorld(req.query.username, req.query.name).then((data) => {
    res.send(data);
  })
})

app.post('/addWorld', (req, res) => {
  addWorld(req.body);
  res.sendStatus(201);
})

app.listen(port, () => {
  console.log(`dnd date tracker listening at http://localhost:${port}`)
})