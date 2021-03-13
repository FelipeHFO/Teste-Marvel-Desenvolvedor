import { Link } from "react-router-dom";
import { PERSONAGENS_PAGE_PATH } from "../routes/routeNames";
import DefaultLayout from '../layouts/DefaultLayout'

function MainPage(){
  return (
    <DefaultLayout>
      <Link to={PERSONAGENS_PAGE_PATH}>Personagens</Link>
    </DefaultLayout>
  )
}

export default MainPage;