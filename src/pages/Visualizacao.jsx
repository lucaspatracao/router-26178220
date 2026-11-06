import { useState } from 'react'
import { Link } from 'react-router-dom'

// Props que chegam do App:
//  - title: constante com o título da página
//  - registros: estado com todos os livros
//  - removerRegistro: função criada no App que apaga um livro pelo id
export default function Visualizacao({ title, registros, removerRegistro }) {
    // Estado só desta página: o texto da busca (O5)
    const [busca, setBusca] = useState('')

    // Pergunto antes de apagar, para não remover sem querer (O3)
    function handleRemover(livro) {
        if (window.confirm(`Remover "${livro.titulo}"?`)) {
            removerRegistro(livro.id)
        }
    }

    // Sem nenhum livro cadastrado: mostro um aviso com link para o cadastro
    if (registros.length === 0) {
        return (
            <section>
                <h1>{title}</h1>
                <p>
                    Nenhum livro cadastrado.{' '}
                    <Link to="/livros/novo">Cadastre o primeiro</Link>.
                </p>
            </section>
        )
    }

    // filter: só os livros que têm o texto da busca no título
    // sort: ordem alfabética pelo título (C=4). O filter já cria um array novo,
    // então o sort não mexe no estado do App.
    const termo = busca.trim().toLowerCase()
    const exibidos = registros
        .filter((r) => r.titulo.toLowerCase().includes(termo))
        .sort((a, b) => a.titulo.localeCompare(b.titulo, 'pt-BR'))

    return (
        <section>
            <h1>{title}</h1>

            <input
                className="busca"
                type="search"
                placeholder="Buscar pelo título..."
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
            />

            {exibidos.length === 0 ? (
                <p>Nenhum livro encontrado para <strong>{busca}</strong>.</p>
            ) : (
                <ul className="lista">
                    {exibidos.map((r) => (
                        // a key usa o id para o React saber qual item é qual
                        <li key={r.id}>
                            {/* O2: clicar no livro abre a página de detalhes dele */}
                            <Link className="info" to={`/livros/${r.id}`}>
                                <div className="titulo">{r.titulo}</div>
                                <div className="detalhe">{r.autor} · {r.ano} · {r.genero}</div>
                            </Link>
                            <div className="acoes">
                                <Link className="btn btn-sec" to={`/livros/${r.id}/editar`}>Editar</Link>
                                <button className="btn btn-perigo" onClick={() => handleRemover(r)}>
                                    Remover
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </section>
    )
}