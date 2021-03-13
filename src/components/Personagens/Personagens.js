import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { formatRoute } from 'react-router-named-routes';
import { PERSONAGEM_PAGE_PATH } from '../../routes/routeNames';
import { getPersonagens } from '../../services/personagens';

function Personagens() {
  const [personagens, setPersonagens] = useState([]);

  useEffect(() => {
    getPersonagens()
    .then(resposta => setPersonagens(resposta.data))
    .catch(erro => console.log(erro));
  }, [])

  return (
    <div>
      {personagens.map(personagem => (
        <Link key={personagem.id} to={formatRoute(PERSONAGEM_PAGE_PATH, {id: personagem.id})}>{personagem.name}</Link>   
      ))} 
    </div>
  )
}

export default Personagens;
