import { Link, useParams } from 'react-router-dom'

// Mostra todos os campos de um livro (O2).
// Prop que vem do App: registros (a lista inteira).
// O id do livro vem da própria URL (/livros/:id), por isso uso useParams.
export default function Detalhes({ registros }) {
    const { id } = useParams()

    // useParams devolve texto. Converto para número para comparar com o id do livro.
    const livro = registros.find((r) => r.id === Number(id))

    // Se não achar nenhum livro com esse id, aviso e dou um caminho de volta
    if (!livro) {
        return (
            <section>
                <h1>Livro não encontrado</h1>
                <p>Não existe livro com o id <code>{id}</code>.</p>
                <Link to="/livros">Voltar para o acervo</Link>
            </section>
        )
    }

    return (
        <section>
            <h1>{livro.titulo}</h1>

            <dl className="ficha">
                <div><dt>Autor</dt><dd>{livro.autor}</dd></div>
                <div><dt>Ano de publicação</dt><dd>{livro.ano}</dd></div>
                <div><dt>Gênero</dt><dd>{livro.genero}</dd></div>
            </dl>

            <div className="acoes">
                <Link className="btn" to={`/livros/${livro.id}/editar`}>Editar</Link>
                <Link className="btn btn-sec" to="/livros">Voltar</Link>
            </div>
        </section>
    )
}