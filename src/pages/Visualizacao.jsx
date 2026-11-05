import { Link } from 'react-router-dom'

// Props vindas do App: title (constante) e registros (estado central).
export default function Visualizacao({ title, registros }) {
    // Sem registros: mensagem com link para o cadastro.
    if (registros.length === 0) {
        return (
            <section>
                <h1>{title}</h1>
                <p>Nenhum livro cadastrado. <Link to="/livros/novo">Cadastre o primeiro</Link>.</p>
            </section>
        )
    }

    // C=4: ordem alfabética pelo Título. Cópia para não mutar o estado.
    const ordenados = [...registros].sort((a, b) =>
        a.titulo.localeCompare(b.titulo, 'pt-BR')
    )

    return (
        <section>
            <h1>{title}</h1>
            <ul className="lista">
                {ordenados.map((r) => (
                    <li key={r.id}>
                        <div className="titulo">{r.titulo}</div>
                        <div className="detalhe">{r.autor} · {r.ano} · {r.genero}</div>
                    </li>
                ))}
            </ul>
        </section>
    )
}