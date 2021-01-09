import Axios from "axios";
import baseInfo from "./baseInfo";

export default (movieTitle) => {
  //movieTitle=movieTitle.replace(' ',"%20");
  const url = `${baseInfo.url}/search/movie?api_key=${baseInfo.apiKey}&language=pt-BR&page=1&include_adult=true&query=${movieTitle}`;
  return Axios.get(url);
};
