import React, { useEffect, useState } from 'react'
import Personagem from '../components/Personagem/Personagem'
import api from '../api/api'

function PersonagemPage(params){
  const [personagem, setPersonagem] = useState({});

  useEffect(() => {
    api.get(`characters/${params.match.params.id}`)
    .then(resposta => setPersonagem(resposta.data))
    .catch(erro => console.log(erro));
  }, [])

  return <Personagem id={personagem.id} name={personagem.name} description={personagem.description} /> 
}

export default PersonagemPage;