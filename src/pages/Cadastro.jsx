import { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

const GENEROS = ['Romance', 'Técnico', 'Didático']

// Esta tela serve para CADASTRAR (/livros/novo) e para EDITAR (/livros/:id/editar).
// Props que vêm do App:
//  - adicionarRegistro: salva um livro novo
//  - editarRegistro: atualiza um livro que já existe
//  - registros: a lista, que uso só para ler (achar o livro e checar título repetido)
export default function Cadastro({ adicionarRegistro, editarRegistro, registros }) {
    const navigate = useNavigate()
    const { id } = useParams() // só existe na rota de edição. No cadastro novo vem undefined.

    // Se a URL tem id, procuro o livro que vai ser editado
    const livro = id ? registros.find((r) => r.id === Number(id)) : null
    const editando = Boolean(livro)

    // Formulário controlado: cada campo tem seu state.
    // Na edição começa com os dados do livro. No cadastro novo começa vazio.
    const [titulo, setTitulo] = useState(livro ? livro.titulo : '')
    const [ano, setAno] = useState(livro ? String(livro.ano) : '')
    const [genero, setGenero] = useState(livro ? livro.genero : '')
    const [autor, setAutor] = useState(livro ? livro.autor : '')
    const [erro, setErro] = useState('')

    // Tentaram editar um id que não existe (ex.: /livros/999/editar)
    if (id && !livro) {
        return (
            <section>
                <h1>Livro não encontrado</h1>
                <p>Não existe livro com o id <code>{id}</code>.</p>
                <Link to="/livros">Voltar para o acervo</Link>
            </section>
        )
    }

    function handleSubmit(e) {
        e.preventDefault() // impede a página de recarregar

        // Regra geral: nenhum campo pode ficar vazio
        if (!titulo.trim() || ano === '' || !genero || !autor.trim()) {
            setErro('Preencha todos os campos.')
            return
        }

        // Regra B=2: não aceito título repetido (sem diferenciar maiúsculas e minúsculas).
        // Na edição ignoro o próprio livro, senão ele seria "repetido" de si mesmo.
        const idAtual = livro ? livro.id : null
        const repetido = registros.some(
            (r) => r.id !== idAtual && r.titulo.trim().toLowerCase() === titulo.trim().toLowerCase()
        )
        if (repetido) {
            setErro(`O título "${titulo.trim()}" já está cadastrado.`)
            return
        }

        const dados = {
            titulo: titulo.trim(),
            ano: Number(ano),
            genero,
            autor: autor.trim(),
        }

        if (editando) {
            editarRegistro(livro.id, dados)
        } else {
            adicionarRegistro({ id: Date.now(), ...dados }) // id novo gerado pelo horário
        }
        navigate('/livros') // depois de salvar, volto para a lista
    }

    return (
        <section>
            <h1>{editando ? 'Editar livro' : 'Novo livro'}</h1>
            <form className="form" onSubmit={handleSubmit}>
                <label>Título
                    <input value={titulo} onChange={(e) => setTitulo(e.target.value)} />
                </label>
                <label>Ano de publicação
                    <input type="number" value={ano} onChange={(e) => setAno(e.target.value)} />
                </label>
                <label>Gênero
                    <select value={genero} onChange={(e) => setGenero(e.target.value)}>
                        <option value="">Selecione...</option>
                        {GENEROS.map((g) => (
                            <option key={g} value={g}>{g}</option>
                        ))}
                    </select>
                </label>
                <label>Autor
                    <input value={autor} onChange={(e) => setAutor(e.target.value)} />
                </label>

                {erro && <p className="erro">{erro}</p>}

                <div className="acoes">
                    <button className="botao" type="submit">
                        {editando ? 'Salvar alterações' : 'Salvar'}
                    </button>
                    {editando && <Link className="btn btn-sec" to="/livros">Cancelar</Link>}
                </div>
            </form>
        </section>
    )
}