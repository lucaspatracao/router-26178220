import { useState } from 'react'
import { Link } from 'react-router-dom'

// Props que chegam do App:
//  - title: constante com o título da página
//  - registros: estado com todos os livros
export default function Visualizacao({ title, registros }) {
    // Estado só desta página: o que a pessoa digita na busca (O5).
    // Não precisa ir para o App porque mais ninguém usa esse texto.
    const [busca, setBusca] = useState('')

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

    // 1) filter: fica só com os livros cujo título contém o texto da busca
    // 2) sort: coloco em ordem alfabética pelo título (C=4)
    // O filter já devolve um array novo, então o sort não mexe no estado do App.
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
                            <div className="titulo">{r.titulo}</div>
                            <div className="detalhe">{r.autor} · {r.ano} · {r.genero}</div>
                        </li>
                    ))}
                </ul>
            )}
        </section>
    )
}