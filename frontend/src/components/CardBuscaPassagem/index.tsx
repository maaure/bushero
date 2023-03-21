import { ICardBuscaPassagem } from "../../types/ICardBuscaPassagem";
import { Botao, Container, DivInput, Input, Label } from "./styles";
import React, { useState } from 'react';
import ListaDePassagem from "../ListaDePassagem";
import { NavigateFunction, useNavigate } from "react-router-dom";

export default function CardBuscaPassagem({ largura, altura, esquerda, acima, bordaArredodada, fundo, redirecionar }: ICardBuscaPassagem) {
    let navigate: NavigateFunction = useNavigate();


    const [filtroOrigem, setFiltroOrigem] = useState('');
    const [filtroDestino, setFiltroDestino] = useState('');
    const [filtroData, setFiltroData] = useState('');
    const [mostrarComponente, setMostrarComponente] = useState(false);

    const handleFiltroOrigem = (event: any) => {
        setFiltroOrigem(event.target.value);
    };

    const handleFiltroDestino = (event: any) => {
        setFiltroDestino(event.target.value);
    };

    const handleFiltroData = (event: any) => {
        setFiltroData(event.target.value);
    };

    const handleClick = () => {
        const data = {
            state: {
                lugarOrigem: filtroOrigem,
                lugarDestino: filtroDestino,
                diaViagem: filtroData,
            }
        };

        if (redirecionar) {
            navigate("/listar-passagens", data);
        } else {
            //desenha o resultado na tela
            setMostrarComponente(!mostrarComponente);
        }
    };

    return (
        <>
            <Container largura={largura} altura={altura} esquerda={esquerda} acima={acima} bordaArredodada={bordaArredodada} fundo={fundo}>
                <DivInput>
                    <Label htmlFor="nome">ORIGEM</Label>
                    <Input id="name" type="text" placeholder="Informe local de origem" value={filtroOrigem} onChange={handleFiltroOrigem} required />
                </DivInput>
                <DivInput>
                    <Label htmlFor="nome">DESTINO</Label>
                    <Input id="name" type="text" placeholder="Informe local de destino" value={filtroDestino} onChange={handleFiltroDestino} required />
                </DivInput>
                <DivInput>
                    <Label htmlFor="nome">DATA</Label>
                    <Input id="name" type="date" placeholder="Informe a data da viagem" value={filtroData} onChange={handleFiltroData} required />
                </DivInput>
                <Botao type="submit" onClick={handleClick}>PESQUISAR VIAGEM</Botao>
            </Container>
            {mostrarComponente && <ListaDePassagem lugarOrigem={filtroOrigem} lugarDestino={filtroDestino} />}
        </>
    )
}