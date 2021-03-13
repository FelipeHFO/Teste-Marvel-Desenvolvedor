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

app.listen(PORT, () => {
  console.log('Servidor online!');
})