import React, { useEffect, useState } from 'react';
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
        <div key={personagem.id}>
          <h1>{personagem.name}</h1>
          <h2>{personagem.description}</h2>
        </div>
      ))} 
    </div>
  )
}

export default Personagens;
