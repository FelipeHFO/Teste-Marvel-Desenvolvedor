const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

const data = require('../data/data.json');

app.use(cors());
app.use(express.json());

app.get('/characters', (req, res) => {
  const lista = data.characters.map(char => ({id: char.id, name: char.name}));
  res.end(JSON.stringify(lista));
})

app.get('/characters/:characterId', (req, res) => {
  const personagem = data.characters.find(char => char.id === parseInt(req.params.characterId));
  res.send(personagem);
})

app.get('/characters/:characterId/comics', (req, res) => {
  const { comics } = data.characters.find(char => char.id === parseInt(req.params.characterId));
  res.send(comics);
})

app.get('/characters/:characterId/events', (req, res) => {
  const { events } = data.characters.find(char => char.id === parseInt(req.params.characterId));
  res.send(events);
})

app.get('/characters/:characterId/series', (req, res) => {
  const { series } = data.characters.find(char => char.id === parseInt(req.params.characterId));
  const { available, items } = series;
  res.send({ available, items });
})

app.get('/characters/:characterId/stories', (req, res) => {
  const { stories } = data.characters.find(char => char.id === parseInt(req.params.characterId));
  res.send(stories);
})

app.listen(PORT, () => {
  console.log('Servidor online!');
})
