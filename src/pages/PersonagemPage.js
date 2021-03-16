import React, { useEffect, useState } from 'react';
import Personagem from '../components/Personagem/Personagem';
import DefaultLayout from '../layouts/DefaultLayout';
import { getPersonagem } from '../services/personagens';
import { Link } from 'react-router-dom';
import { PERSONAGENS_PAGE_PATH } from '../routes/routeNames';
import StylesPages from './StylesPages.module.css';

function PersonagemPage(params){
  const [personagem, setPersonagem] = useState({});

  useEffect(() => {
    getPersonagem(params.match.params.id)
    .then(resposta => setPersonagem(resposta.data))
    .catch(erro => console.error(erro));
  }, [])

  return (
    <DefaultLayout>
      {personagem.id !== undefined ?
      <>
      <Link to="/" className={StylesPages.btnHomePage}>Página Inicial</Link>
      <h1 className={StylesPages.breadcrumbsOne}>&gt;&gt;</h1>
      <Link to={PERSONAGENS_PAGE_PATH[0]} className={StylesPages.btnVoltar}>Personagens</Link>
      <h1 className={StylesPages.breadcrumbsTwo}>&gt;&gt;</h1>
      <h1 className={StylesPages.breadcrumbsHero}>{personagem.name}</h1>
      <Personagem id={personagem.id} name={personagem.name} description={personagem.description} />
      </>
      : <h1 className={StylesPages.erro}>404 - Page not found...</h1>}    
    </DefaultLayout>
 )
}

export default PersonagemPage;
