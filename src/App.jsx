import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Rodape from './components/Rodape'
import Home from './pages/Home'
import Cadastro from './pages/Cadastro'
import Visualizacao from './pages/Visualizacao'
import NaoEncontrada from './pages/NaoEncontrada'

// Constantes de identidade: ficam fora do componente porque nunca mudam.
const NOME_SISTEMA = 'Biblioteca Escolar'
const TITULO_VISUALIZACAO = 'Acervo de Livros'

// 3 registros iniciais. O terceiro leva o RA no campo Autor.
const REGISTROS_INICIAIS = [
  { id: 1, titulo: 'Dom Casmurro', ano: 1899, genero: 'Romance', autor: 'Machado de Assis' },
  { id: 2, titulo: 'Clean Code', ano: 2008, genero: 'Técnico', autor: 'Robert C. Martin' },
  { id: 3, titulo: 'Introdução à Lógica de Programação', ano: 2020, genero: 'Didático', autor: 'Lucas Nunes Patracão — RA 26178220' },
]

export default function App() {
  // Estado central: único lugar onde a lista de livros existe.
  const [registros, setRegistros] = useState(REGISTROS_INICIAIS)

  // Função enviada ao Cadastro por props. Cria um array novo com o spread
  // (registros antigos + o novo) em vez de alterar o array atual.
  function adicionarRegistro(novo) {
    setRegistros([...registros, novo])
  }

  return (
    <>
      <Navbar />
      <main className="conteudo">
        <Routes>
          {/* Home recebe o nome do sistema e a quantidade calculada aqui */}
          <Route
            path="/"
            element={<Home nomeSistema={NOME_SISTEMA} quantidade={registros.length} />}
          />
          {/* Cadastro recebe a função e a lista (só leitura, para checar título repetido) */}
          <Route
            path="/livros/novo"
            element={<Cadastro adicionarRegistro={adicionarRegistro} registros={registros} />}
          />
          {/* Visualização recebe a constante (title) e o estado (registros) */}
          <Route
            path="/livros"
            element={<Visualizacao title={TITULO_VISUALIZACAO} registros={registros} />}
          />
          <Route path="*" element={<NaoEncontrada />} />
        </Routes>
      </main>
      {/* Rodapé fora do <Routes>: aparece em todas as rotas */}
      <Rodape />
    </>
  )
}