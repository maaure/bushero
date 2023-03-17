import axios from "axios";
import { API_URL } from "../data/api";
import { IMunicipio } from "../types/IMunicipio";

const URL = `${API_URL}municipios`;

export const buscarMunicipios = (nome: string) => {
    return axios.get(`${URL}?nome=${nome}`);
}