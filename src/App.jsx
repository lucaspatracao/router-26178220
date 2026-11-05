import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Cadastro from './pages/Cadastro'
import Visualizacao from './pages/Visualizacao'
import NaoEncontrada from './pages/NaoEncontrada'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/livros/novo" element={<Cadastro />} />
      <Route path="/livros" element={<Visualizacao />} />
      {/* O "*" captura qualquer endereço que não casou com as rotas acima */}
      <Route path="*" element={<NaoEncontrada />} />
    </Routes>
  )
}