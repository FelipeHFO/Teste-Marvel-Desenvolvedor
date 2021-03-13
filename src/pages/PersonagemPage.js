import React, { useEffect, useState } from 'react'
import Personagem from '../components/Personagem/Personagem'
import { getPersonagem } from '../services/personagens'

function PersonagemPage(params){
  const [personagem, setPersonagem] = useState({});

  useEffect(() => {
    getPersonagem(params.match.params.id)
    .then(resposta => setPersonagem(resposta.data))
    .catch(erro => console.log(erro));
  }, [])

  return <Personagem id={personagem.id} name={personagem.name} description={personagem.description} /> 
}

export default PersonagemPage;