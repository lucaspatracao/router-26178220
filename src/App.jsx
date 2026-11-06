import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Rodape from './components/Rodape'
import Home from './pages/Home'
import Cadastro from './pages/Cadastro'
import Visualizacao from './pages/Visualizacao'
import Detalhes from './pages/Detalhes'
import NaoEncontrada from './pages/NaoEncontrada'

// Valores fixos: deixei fora do componente porque nunca mudam
const NOME_SISTEMA = 'Biblioteca Escolar — Lucas'
const TITULO_VISUALIZACAO = 'Acervo de Livros'
const CHAVE_STORAGE = 'biblioteca-livros' // nome da "gaveta" onde guardo os livros no navegador

// Livros que o sistema já tem na primeira vez que abre. O terceiro leva meu RA no autor.
const REGISTROS_INICIAIS = [
  { id: 1, titulo: 'Dom Casmurro', ano: 1899, genero: 'Romance', autor: 'Machado de Assis' },
  { id: 2, titulo: 'Clean Code', ano: 2008, genero: 'Técnico', autor: 'Robert C. Martin' },
  { id: 3, titulo: 'Introdução à Lógica de Programação', ano: 2020, genero: 'Didático', autor: 'Lucas Nunes Patracão — RA 26178220' },
]

// Lê os livros salvos no localStorage. Se não tiver nada salvo (ou der erro),
// volto para os livros iniciais.
function carregarRegistros() {
  try {
    const salvo = localStorage.getItem(CHAVE_STORAGE)
    return salvo ? JSON.parse(salvo) : REGISTROS_INICIAIS
  } catch {
    return REGISTROS_INICIAIS
  }
}

export default function App() {
  // Estado central: é o único lugar onde a lista de livros existe.
  const [registros, setRegistros] = useState(carregarRegistros)

  // O6: sempre que a lista muda, guardo ela de novo no navegador.
  useEffect(() => {
    localStorage.setItem(CHAVE_STORAGE, JSON.stringify(registros))
  }, [registros])

  // CREATE: monto um array novo com o spread (livros antigos + o novo)
  function adicionarRegistro(novo) {
    console.log('Recebi no App:', novo) // uso no vídeo para mostrar o caminho do dado
    setRegistros([...registros, novo])
  }

  // UPDATE (O4): percorro com map. Só o livro com o id certo é trocado
  // (copio ele com spread e junto os dados novos). Os outros ficam iguais.
  function editarRegistro(id, dados) {
    setRegistros(registros.map((r) => (r.id === id ? { ...r, ...dados } : r)))
  }

  // DELETE (O3): o filter devolve uma lista nova sem o livro com esse id
  function removerRegistro(id) {
    setRegistros(registros.filter((r) => r.id !== id))
  }

  return (
    <>
      <Navbar />
      <main className="conteudo">
        <Routes>
          {/* Home: recebe o nome do sistema e a quantidade que calculei aqui */}
          <Route
            path="/"
            element={<Home nomeSistema={NOME_SISTEMA} quantidade={registros.length} />}
          />
          {/* Uso key diferente em cada Cadastro para o React não misturar
              o formulário de cadastro com o de edição */}
          <Route
            path="/livros/novo"
            element={
              <Cadastro
                key="novo"
                adicionarRegistro={adicionarRegistro}
                editarRegistro={editarRegistro}
                registros={registros}
              />
            }
          />
          {/* Visualização: constante (title), estado (registros) e função de remover */}
          <Route
            path="/livros"
            element={
              <Visualizacao
                title={TITULO_VISUALIZACAO}
                registros={registros}
                removerRegistro={removerRegistro}
              />
            }
          />
          {/* O2: o ":id" é um pedaço variável da URL, lido com useParams */}
          <Route path="/livros/:id" element={<Detalhes registros={registros} />} />
          {/* O4: mesma tela de Cadastro, mas em modo edição */}
          <Route
            path="/livros/:id/editar"
            element={
              <Cadastro
                key="editar"
                adicionarRegistro={adicionarRegistro}
                editarRegistro={editarRegistro}
                registros={registros}
              />
            }
          />
          <Route path="*" element={<NaoEncontrada />} />
        </Routes>
      </main>
      <Rodape />
    </>
  )
}