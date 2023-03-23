import axios from "axios";
import { API_URL } from "../data/api";
import { ICompanhia } from "../types/ICompanhia";

const URL = API_URL + "companhia/";

export const listarCompanhia = () => axios.get(URL);

export const detalharCompanhia = (id:any) => axios.get(URL + `${id}`);

export const criarCompanhia = (data: ICompanhia) => axios.post(URL, data);
