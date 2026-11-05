import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const GENEROS = ['Romance', 'Técnico', 'Didático']

// Props vindas do App:
//  - adicionarRegistro(livro): grava o livro no estado central
//  - registros: lista atual, usada só para conferir títulos repetidos
export default function Cadastro({ adicionarRegistro, registros }) {
    const navigate = useNavigate()

    // Formulário controlado: cada campo tem o seu state.
    const [titulo, setTitulo] = useState('')
    const [ano, setAno] = useState('')
    const [genero, setGenero] = useState('')
    const [autor, setAutor] = useState('')
    const [erro, setErro] = useState('')

    function handleSubmit(e) {
        e.preventDefault() // impede o recarregamento da página

        // Regra geral: nenhum campo pode ficar vazio.
        if (!titulo.trim() || ano === '' || !genero || !autor.trim()) {
            setErro('Preencha todos os campos.')
            return
        }

        // Regra B=2: título repetido, sem diferenciar maiúsculas/minúsculas.
        const repetido = registros.some(
            (r) => r.titulo.trim().toLowerCase() === titulo.trim().toLowerCase()
        )
        if (repetido) {
            setErro(`O título "${titulo.trim()}" já está cadastrado.`)
            return
        }

        adicionarRegistro({
            id: Date.now(), // id único pelo instante do cadastro
            titulo: titulo.trim(),
            ano: Number(ano),
            genero,
            autor: autor.trim(),
        })
        navigate('/livros') // após salvar, vai para a visualização
    }

    return (
        <section>
            <h1>Novo livro</h1>
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
                <button className="botao" type="submit">Salvar</button>
            </form>
        </section>
    )
}