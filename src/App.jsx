import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Rodape from './components/Rodape'
import Home from './pages/Home'
import Cadastro from './pages/Cadastro'
import Visualizacao from './pages/Visualizacao'
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
  // Passei a função (sem parênteses) para o useState rodar só na primeira renderização.
  const [registros, setRegistros] = useState(carregarRegistros)

  // O6: sempre que a lista muda, guardo ela de novo no navegador.
  // O localStorage só aceita texto, por isso uso JSON.stringify.
  useEffect(() => {
    localStorage.setItem(CHAVE_STORAGE, JSON.stringify(registros))
  }, [registros])

  // Esta função vai por props para o Cadastro. Monto um array novo com o spread
  // (livros antigos + o novo) em vez de alterar o array que já existe.
  function adicionarRegistro(novo) {
    console.log('Recebi no App:', novo) // uso no vídeo para mostrar o caminho do dado
    setRegistros([...registros, novo])
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
          {/* Cadastro: recebe a função e a lista (só para ler e checar título repetido) */}
          <Route
            path="/livros/novo"
            element={<Cadastro adicionarRegistro={adicionarRegistro} registros={registros} />}
          />
          {/* Visualização: recebe a constante (title) e o estado (registros) */}
          <Route
            path="/livros"
            element={<Visualizacao title={TITULO_VISUALIZACAO} registros={registros} />}
          />
          <Route path="*" element={<NaoEncontrada />} />
        </Routes>
      </main>
      <Rodape />
    </>
  )
}