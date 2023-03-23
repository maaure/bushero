import { IClasseViagem } from "./IClasseViagem";
import { ICompanhia }  from "./ICompanhia";
import { IMunicipio } from "./IMunicipio";

export interface IViagem {
    id?: number,
    origem: IMunicipio,
    destino: IMunicipio,
    companhia: ICompanhia,
    horario_saida: string,
    duracao: string,
    classe: IClasseViagem,
    valor: number,
    assentos: number,
}

