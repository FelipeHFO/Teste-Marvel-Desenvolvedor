import React, { useEffect, useState } from 'react'
import Personagens from '../components/Personagens/Personagens'
import DefaultLayout from '../layouts/DefaultLayout'
import { getPersonagens } from '../services/personagens';

function PersonagensPage(params){
  const [personagens, setPersonagens] = useState([]);

  useEffect(() => {
    getPersonagens()
    .then(resposta => setPersonagens(resposta.data))
    .catch(erro => console.log(erro));
  }, [])

  return (
    <DefaultLayout>
      <Personagens personagens={personagens}/>
    </DefaultLayout>
 )
}

export default PersonagensPage;
