import { ICardBuscaPassagem } from "../../types/ICardBuscaPassagem";
import { Botao, Container, DivInput, Input, Label } from "./styles";

export default function CardBuscaPassagem({largura, altura, esquerda, acima, bordaArredodada, fundo}: ICardBuscaPassagem) {

    return (
        <Container largura={largura} altura={altura} esquerda={esquerda} acima={acima} bordaArredodada={bordaArredodada} fundo={fundo}>
            <DivInput>
                <Label htmlFor="nome">ORIGEM</Label>
                <Input id="name" type="text" placeholder="Informe local de origem" required />
            </DivInput>
            <DivInput>
                <Label htmlFor="nome">DESTINO</Label>
                <Input id="name" type="text" placeholder="Informe local de destino" required />
            </DivInput>
            <DivInput>
                <Label htmlFor="nome">DATA</Label>
                <Input id="name" type="date" placeholder="Informe a data da viagem" required />

            </DivInput>
            <Botao type="submit">PESQUISAR VIAGEM</Botao>
        </Container>

    )
}