import { Link } from "react-router-dom";
import { PERSONAGENS_PAGE_PATH } from "../routes/routeNames";

function MainPage(){
  return <Link to={PERSONAGENS_PAGE_PATH}>Personagens</Link>
}

export default MainPage;