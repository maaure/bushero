import React, { useState, useEffect } from 'react';
import { Row } from 'react-bootstrap';
import { listarViagem } from '../../services/ViagemService';
import { IViagem } from '../../types/IViagem';
import { BotaoReserva, ItemLegenda, ItemPassagem, LiLegenda, LiPassagem } from './styled';
import { useLocation, useNavigate, Link } from 'react-router-dom';



export default function ListaDePassagem({ lugarOrigem, lugarDestino }: any) {
  const [passagens, setPassagens] = useState<IViagem[]>([]);

  const history = useNavigate();
  const location = useLocation();

  function reservarPassagem(id: number) {
    localStorage.setItem('idViagem', id.toString())
    history('/reserva-viagem')
  }


  function listarPassagens() {
    listarViagem() //faça a consulta
      .then((response) => { //então... 
        setPassagens(response.data); //atribua os valores ao estado 'passagens'
      })
      .then(() => { //então...
        //realizar filtro por lugarOrigem e lugarDestino
        console.log(location.state.lugarOrigem);
        /*         passagens.filter(
                  (p) => p.origem === lugarOrigem && p.destino === lugarDestino
                ) */

      });

  }

  useEffect(listarPassagens, []);

  const passagensFiltradas = passagens; /* passagens.length > 0 ? passagens.filter(
    (passagem) =>
      passagem.origem.toLowerCase().includes(lugarOrigem.toLowerCase()) && passagem.destino.toLowerCase().includes(lugarDestino.toLowerCase())
  ) : []; */




  return (
    <div>
      <ul>
        <LiLegenda>
          <ItemLegenda>
            <span>Companhia</span>
          </ItemLegenda>
          <ItemLegenda>
            <span>Origem/Destino</span>
          </ItemLegenda>
          <ItemLegenda>
            <span>Saída</span>
          </ItemLegenda>
          <ItemLegenda>
            <span>Duração</span>
          </ItemLegenda>
          <ItemLegenda>
            <span>Valor</span>
          </ItemLegenda>
        </LiLegenda>
        {passagens.map((passagem) => (
          <LiPassagem key={passagem.id}>
            <ItemPassagem>{passagem.companhia.nome}</ItemPassagem>
            <ItemPassagem>{passagem.origem.nome} a {passagem.destino.nome}</ItemPassagem>
            <ItemPassagem>{passagem.horario_saida}</ItemPassagem>
            <ItemPassagem>{passagem.duracao}</ItemPassagem>
            <ItemPassagem>{passagem.valor}</ItemPassagem>
            <BotaoReserva onClick={() => {
              reservarPassagem(passagem.id || 0)
            }}>
              Reservar
            </BotaoReserva>
          </LiPassagem>
        ))}
      </ul>
    </div>
  );
}