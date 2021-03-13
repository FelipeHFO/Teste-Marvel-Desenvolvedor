import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import MainPageComponent from '../pages/MainPage';
import PersonagemComponent from '../pages/PersonagemPage';
import PersonagensComponent from '../components/Personagens/Personagens';

import { 
  PERSONAGENS_PAGE_PATH,
  PERSONAGEM_PAGE_PATH, 
  COMICS_PAGE_PATH, 
  EVENTS_PAGE_PATH, 
  SERIES_PAGE_PATH, 
  STORIES_PAGE_PATH
} from './routeNames';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={MainPageComponent}/>
      <Route exact path={PERSONAGENS_PAGE_PATH} component={PersonagensComponent}/>
      <Route exact path={PERSONAGEM_PAGE_PATH} component={PersonagemComponent}/>
      <Route exact path={COMICS_PAGE_PATH}/>
      <Route exact path={EVENTS_PAGE_PATH}/>
      <Route exact path={SERIES_PAGE_PATH}/>
      <Route exact path={STORIES_PAGE_PATH}/>
    </Switch>
  </Router>
)

export default Routes;
