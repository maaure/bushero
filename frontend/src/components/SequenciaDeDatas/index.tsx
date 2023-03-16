import React, { useState, useEffect } from "react";
import { Semana } from "./styled";

function SequenciaDeDatas() {
    const [datas, setDatas] = useState<Date[]>([]);

    useEffect(() => {
        // Cria um array de datas para a semana atual
        const hoje = new Date();
        const novasDatas: Date[] = [];
        for (let i = 0; i < 7; i++) {
            const data = new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate() + i);
            novasDatas.push(data);
        }

        // Atualiza o estado do componente com as novas datas
        setDatas(prevState => [...prevState, ...novasDatas]);
    }, []);

    // Renderiza a sequência de datas
    return (
        <Semana>
            {datas.map((data, index) =>
                (
                    <span key={index}>{data.toLocaleDateString("pt-BR", { weekday: "long", day: "numeric", month: "long" })}</span>
                ))}
        </Semana>
    );
}

export default SequenciaDeDatas;
