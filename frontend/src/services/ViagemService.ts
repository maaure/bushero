import axios from "axios";
import { API_URL } from "../data/api";
import { IViagemForm } from "../types/IViagemForm";

const URL = API_URL + "viagem/";

export const listarViagem = () => {
    return axios.get(URL);
}

export const detalharViagem = (id:any) => axios.get(URL + `${id}`);

export const criarViagem = (data: IViagemForm) => {
    return axios.post(URL, data);
}