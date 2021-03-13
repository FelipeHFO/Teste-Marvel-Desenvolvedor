import React, { useEffect, useState } from 'react';
import Personagem from '../Personagem/Personagem';
import api from '../../api/api';


function Personagens() {
  const [personagens, setPersonagens] = useState([]);

  useEffect(() => {
    api.get('characters')
       .then(resposta => setPersonagens(resposta.data))
       .catch(erro => console.log(erro));
  }, [])

  return (
    <div>
      {personagens.map(personagem => (
        <Personagem key={personagem.id} personagem={personagem} />
      ))} 
    </div>
  )
}

export default Personagens;