import { combineReducers } from "redux";
import equipe from "./equipe";
import vitimas from "./vitimas";
import localizacao from "./localizacao";

export default combineReducers({
  equipe,
  vitimas,
  localizacao,
});
