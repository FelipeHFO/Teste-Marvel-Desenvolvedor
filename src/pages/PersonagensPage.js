import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Personagens from '../components/Personagens/Personagens';
import DefaultLayout from '../layouts/DefaultLayout';
import { getPersonagens } from '../services/personagens';
import StylesPages from './StylesPages.module.css';

function PersonagensPage(params){
  const [personagens, setPersonagens] = useState([]);

  useEffect(() => {
    getPersonagens()
    .then(resposta => setPersonagens(resposta.data))
    .catch(erro => console.log(erro));
  }, [])

  return (
    <DefaultLayout>
      <Link to="/" className={StylesPages.btnHomePage}>Página Inicial</Link>
      <h1 className={StylesPages.breadcrumbsOne}>&gt;&gt;</h1>
      <h1 className={StylesPages.breadcrumbsPersonagens}>Personagens</h1>
      <Personagens personagens={personagens}/>
    </DefaultLayout>
 )
}

export default PersonagensPage;
