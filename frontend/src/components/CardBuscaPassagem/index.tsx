import { ICardBuscaPassagem } from "../../types/ICardBuscaPassagem";
import { Botao, Container, DivInput, Input, Label } from "./styles";
import React, { useState } from 'react';
import ListaDePassagem from "../ListaDePassagem";

export default function CardBuscaPassagem({ largura, altura, esquerda, acima, bordaArredodada, fundo }: ICardBuscaPassagem) {

    const [filtroOrigem, setFiltroOrigem] = useState('');
    const [filtroDestino, setFiltroDestino] = useState('');
    const [mostrarComponente, setMostrarComponente] = useState(false);

    const handleFiltroOrigem = (event: any) => {
        setFiltroOrigem(event.target.value);
    };

    const handleFiltroDestino = (event: any) => {
        setFiltroDestino(event.target.value);
    };

    const handleClick = () => {
        setMostrarComponente(!mostrarComponente); // alterna entre true e false
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
                    <Input id="name" type="date" placeholder="Informe a data da viagem" required />
                </DivInput>
                <Botao type="submit" onClick={handleClick}>PESQUISAR VIAGEM</Botao>
            </Container>
            {mostrarComponente && <ListaDePassagem lugarOrigem={filtroOrigem} lugarDestino={filtroDestino} />}
        </>
    )
}