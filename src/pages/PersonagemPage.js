import React, { useEffect, useState } from 'react'
import Personagem from '../components/Personagem/Personagem'
import { getPersonagem } from '../services/personagens'
import DefaultLayout from '../layouts/DefaultLayout'

function PersonagemPage(params){
  const [personagem, setPersonagem] = useState({});

  useEffect(() => {
    getPersonagem(params.match.params.id)
    .then(resposta => setPersonagem(resposta.data))
    .catch(erro => console.log(erro));
  }, [])

  return (
    <DefaultLayout>
      <Personagem id={personagem.id} name={personagem.name} description={personagem.description} />
    </DefaultLayout>
 )
}

export default PersonagemPage;
