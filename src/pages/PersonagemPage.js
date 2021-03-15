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
    .catch(erro => console.log(erro));
  }, [])

  return (
    <DefaultLayout>
      <Link to="/" className={StylesPages.btnHomePage}>Página Inicial</Link>
      <h1 className={StylesPages.breadcrumbsOne}>&gt;&gt;</h1>
      <Link to={PERSONAGENS_PAGE_PATH} className={StylesPages.btnVoltar}>Personagens</Link>
      <h1 className={StylesPages.breadcrumbsTwo}>&gt;&gt;</h1>
      <h1 className={StylesPages.breadcrumbsHero}>{personagem.name}</h1>
      <Personagem id={personagem.id} name={personagem.name} description={personagem.description} />
    </DefaultLayout>
 )
}

export default PersonagemPage;
