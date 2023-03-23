import axios from "axios";
import { IViagemForm } from "../components/FormCadastrarViagem";
import { API_URL } from "../data/api";
import { IViagem } from "../types/IViagem";

const URL = API_URL + "viagem/";

export const listarViagem = () => {
    return axios.get(URL);
}

export const detalharViagem = (id:any) => axios.get(URL + `${id}`);

export const criarViagem = (data: IViagemForm) => {
    return axios.post(URL, data);
}