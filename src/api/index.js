const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;
const base_url_api_v1 = '/v1/public';

const data = require('./data/data.json');

app.use(cors());
app.use(express.json());

app.get(`${base_url_api_v1}/characters`, (req, res) => {
  const lista = data.characters.map(char => ({id: char.id, name: char.name}));
  res.end(JSON.stringify(lista));
})

app.get(`${base_url_api_v1}/characters/:characterId`, (req, res) => {
  const personagem = data.characters.find(char => char.id === parseInt(req.params.characterId));

  if(!personagem)
    return res.status(200).send({ msg: 'Personagem não encontrado...' });

  res.status(200).send(personagem);
})

app.get(`${base_url_api_v1}/characters/:characterId/comics`, (req, res) => {
  const { comics } = data.characters.find(char => char.id === parseInt(req.params.characterId));

  if(!comics)
    return res.status(200).send({ errors: { msg: 'Personagem não tem Quadrinhos...' }});

  res.status(200).send(comics);
})

app.get(`${base_url_api_v1}/characters/:characterId/events`, (req, res) => {
  const { events } = data.characters.find(char => char.id === parseInt(req.params.characterId));

  if(!events){
    return res.status(200).send({ errors: { msg: 'Personagem não tem Eventos...' }});
  }

  res.status(200).send(events);
})

app.get(`${base_url_api_v1}/characters/:characterId/series`, (req, res) => {
  const { series } = data.characters.find(char => char.id === parseInt(req.params.characterId));

  if(!series)
    return res.status(200).send({ errors: { msg:'Personagem não tem Séries...' }});

  res.status(200).send(series);
})

app.get(`${base_url_api_v1}/characters/:characterId/stories`, (req, res) => {
  const { stories } = data.characters.find(char => char.id === parseInt(req.params.characterId));

  if(!stories)
    return res.status(200).send({ errors: { msg:'Personagem não tem Histórias...' }});

  res.status(200).send(stories);
})

app.listen(PORT, () => {
  console.log('Servidor online!');
})
