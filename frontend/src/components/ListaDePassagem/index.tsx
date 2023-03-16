import React, { useState, useEffect } from 'react';
import { Row } from 'react-bootstrap';
import { listarViagem } from '../../services/ViagemService';
import { IViagemForm } from '../../types/IViagemForm';
import { ItensPassagem, LiPassagem } from './styled';
import { parseISO, format } from 'date-fns';


export default function ListaDePassagem({lugarOrigem, lugarDestino}:any) {
  const [passagens, setPassagens] = useState<IViagemForm[]>([]);


  function listarPassagens(){
    listarViagem().then((response) => {
        setPassagens(response.data)})
        console.log(passagens);
    }

  useEffect(listarPassagens, []);

  const passagensFiltradas = passagens.filter(
    (passagem) =>
      passagem.origem.toLowerCase().includes(lugarOrigem.toLowerCase()) && passagem.destino.toLowerCase().includes(lugarDestino.toLowerCase())
  );

  return (
    <div>
      <ul>
        {passagensFiltradas.map((passagem) => (
            <LiPassagem key={passagem.id}>
                <ItensPassagem>{passagem.companhia}</ItensPassagem>
                <ItensPassagem>{passagem.origem} a {passagem.destino}</ItensPassagem>
                <ItensPassagem>{passagem.horario_saida}</ItensPassagem>
                <ItensPassagem>{passagem.valor}</ItensPassagem>
                <button>Reservar</button>
            </LiPassagem>
        ))}
      </ul>
    </div>
  );
}