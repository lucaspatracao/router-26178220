import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Cadastro from './pages/Cadastro'
import Visualizacao from './pages/Visualizacao'
import NaoEncontrada from './pages/NaoEncontrada'

export default function App() {
  return (
    <>
      {/* A Navbar fica fora do <Routes>, então aparece em todas as páginas */}
      <Navbar />
      <main className="conteudo">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/livros/novo" element={<Cadastro />} />
          <Route path="/livros" element={<Visualizacao />} />
          <Route path="*" element={<NaoEncontrada />} />
        </Routes>
      </main>
    </>
  )
}