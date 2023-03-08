import { BarraLogo, IconeLogo } from "./styles";
import iconelogo from "../../assets/Img/logo.svg";

export default function Cabecalho() {


    return (
        <>
            <BarraLogo>
                <IconeLogo src={iconelogo} alt="Ícone da empresa" />
            </BarraLogo>
        </>
    )
}