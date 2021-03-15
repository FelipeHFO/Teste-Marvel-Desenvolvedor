import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import MainPage from '../pages/MainPage';
import NotFoundPage from '../pages/NotFoundPage';
import PersonagemPage from '../pages/PersonagemPage';
import PersonagensPage from '../pages/PersonagensPage';

import { 
  PERSONAGENS_PAGE_PATH,
  PERSONAGEM_PAGE_PATH
} from './routeNames';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={MainPage}/>
      <Route exact path={PERSONAGENS_PAGE_PATH} component={PersonagensPage}/>
      <Route exact path={PERSONAGEM_PAGE_PATH} component={PersonagemPage}/>
      <Route component={NotFoundPage} />
    </Switch>
  </Router>
)

export default Routes;
