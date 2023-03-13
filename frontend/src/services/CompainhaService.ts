import axios from "axios";
import { API_URL } from "../data/api";

const URL = API_URL + "compainha/";

/* export function listarCompainha(){
    return axios.get(URL);
} */

export const listarCompainha = () => axios.get(URL);