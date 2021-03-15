import React from 'react'
import { Link } from 'react-router-dom';
import { formatRoute } from 'react-router-named-routes';
import { PERSONAGEM_PAGE_PATH } from '../../routes/routeNames';
import StylesPages from '../../pages/StylesPages.module.css';

function Personagens({personagens}) {
  return (
    <div className={StylesPages.containerHeroes}>
      {personagens.map(personagem => (
        <Link 
          key={personagem.id} 
          to={formatRoute(PERSONAGEM_PAGE_PATH, {id: personagem.id})}
          className={StylesPages.btnHeroes}
        >
          {personagem.name}
        </Link>
      ))}
    </div>
  )
}

export default Personagens;
