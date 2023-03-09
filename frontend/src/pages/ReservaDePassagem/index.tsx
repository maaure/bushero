import Cabecalho from "../../components/cabecalho";
import { ContainerCards, ImgViagem } from "./styles";
import imgviagem from "../../assets/Img/viagembus.jpg";
import CardBuscaPassagem from "../../components/CardBuscaPassagem";
import CardPassagemPromo from "../../components/CardPassagemPromo";



export default function ReservaDePassagem() {
    return (
        <>
            <ImgViagem src={imgviagem} alt="logo da empresa" />
            <CardBuscaPassagem />
            <ContainerCards>
                <CardPassagemPromo />
                <CardPassagemPromo />
                <CardPassagemPromo />
                <CardPassagemPromo />
                <CardPassagemPromo />
            </ContainerCards>
        </>
    )
}