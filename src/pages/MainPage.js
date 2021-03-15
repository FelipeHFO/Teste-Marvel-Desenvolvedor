import { Link } from "react-router-dom";
import { PERSONAGENS_PAGE_PATH } from "../routes/routeNames";
import DefaultLayout from '../layouts/DefaultLayout';
import StylesPages from './StylesPages.module.css';

function MainPage(){
  return (
    <DefaultLayout>
      <Link to={PERSONAGENS_PAGE_PATH} className={StylesPages.btnPersonagens}>Personagens</Link>
    </DefaultLayout>
  )
}

export default MainPage;
