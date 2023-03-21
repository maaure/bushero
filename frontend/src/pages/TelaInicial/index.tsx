import Cabecalho from "../../components/cabecalho";
import { ContainerCards, ImgViagem } from "./styles";
import imgviagem from "../../assets/Img/viagembus.jpg";
import CardBuscaPassagem from "../../components/CardBuscaPassagem";
import CardPassagemPromo from "../../components/CardPassagemPromo";

export default function TelaInicial() {

    return (
        <>
            <ImgViagem src={imgviagem} alt="logo da empresa" />
            <CardBuscaPassagem  largura="80%" altura="15vh" esquerda="10%" acima="-7.5vh" redirecionar={true} />
            <ContainerCards >
                <CardPassagemPromo />
                <CardPassagemPromo />
                <CardPassagemPromo />
                <CardPassagemPromo />
                <CardPassagemPromo />
            </ContainerCards>
        </>
    )
}