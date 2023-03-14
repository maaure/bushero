import axios from "axios";
import { API_URL } from "../data/api";

const URL = API_URL + "companhia/";

/* export function listarCompainha(){
    return axios.get(URL);
} */

export const listarCompanhia = () => axios.get(URL);