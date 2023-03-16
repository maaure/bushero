
import Cabecalho from "./components/Cabecalho"
import ListarDePassagem from "./components/ListarDePassagem"
import CadastrarCompanhia from "./pages/CadastrarCompanhia"
import CadastrarViagem from "./pages/CadastrarViagem"
import ReservaDePassagem from "./pages/ReservaDePassagem"
import { Routes, Route, Link } from 'react-router-dom'
import TelaInicial from "./pages/TelaInicial"

function App() {
  return (
    <>
      <Cabecalho />
      <Routes>
        <Route path="/" element={<TelaInicial/>}></Route>
        <Route path="/reserva-viagem" element={<ReservaDePassagem/>}></Route>
        <Route path="/cadastrar-viagem" element={<CadastrarViagem/>}></Route>
        <Route path="/listar-passagens" element={<ListarDePassagem/>}></Route>
        <Route path="/cadastrar-companhia" element={<CadastrarCompanhia/>}></Route>
      </Routes>
    </>
  )
}

export default App
