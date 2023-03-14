import { ISelect } from "../types/ISelect"

export const parseToOption = (id: number, text: string): ISelect => {
    return {
        id: id,
        text: text,
    } 
}