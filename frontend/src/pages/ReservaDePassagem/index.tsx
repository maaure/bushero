import { useEffect, useState } from "react";
import CardBuscaPassagem from "../../components/CardBuscaPassagem";
import { detalharViagem } from "../../services/ViagemService";

export default function ReservaDePassagem() {

    const [id, setId] = useState<string | null>();

    async function carregarDadosDoLocalStorage() {
        let idViagem = await localStorage.getItem('idViagem');
        setId(idViagem);
        console.log(id);


    }

    useEffect(
        () => {
            carregarDadosDoLocalStorage().then(() => {
                if (id) {
                    detalharViagem(id).then(
                        (res) => {
                            console.log(res.data)
                        }
                    ).catch(
                        (error) => (
                            console.log("viagem não encontrada!")
                        )
                    );
                }
            });
        }
    ), [];

    /* 
    useEffect(
        Pegar o id que ta guardado no localStorage
        Setar o id num estado
        Fazer a chamada na API pelo detalhar daquela viagem (falta implementar no back)
    )
    Desenhar o formulario na tela
     */
    return (
        <>
            <CardBuscaPassagem largura="100%" altura="15vh" bordaArredodada="0" fundo="rgba(74, 182, 61, 0.7)" />

        </>

    )
}