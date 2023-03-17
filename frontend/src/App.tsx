
import Cabecalho from "./components/cabecalho"
import SequenciaDeDatas from "./components/SequenciaDeDatas"
import ListaDePassagem from "./components/ListaDePassagem"
import CadastrarCompanhia from "./pages/CadastrarCompanhia"
import CadastrarViagem from "./pages/CadastrarViagem"
import ReservaDePassagem from "./pages/ReservaDePassagem"
import { Routes, Route, Link } from 'react-router-dom'
import TelaInicial from "./pages/TelaInicial"
import React from "react"

function App() {
  return (
    <>
      <Cabecalho />
      <Routes>
        <Route path="/" element={<TelaInicial/>}></Route>
        <Route path="/reserva-viagem" element={<ReservaDePassagem/>}></Route>
        <Route path="/cadastrar-viagem" element={<CadastrarViagem/>}></Route>
        <Route path="/listar-passagens" element={<ListaDePassagem/>}></Route>
        <Route path="/cadastrar-companhia" element={<CadastrarCompanhia/>}></Route>
      </Routes>
    </>
  )
}

export default App
