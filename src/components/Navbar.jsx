import { NavLink } from 'react-router-dom'

export default function Navbar() {
    // NavLink aceita uma função em className. Ela recebe { isActive }
    // e devolve a classe do link: destacado se for a página atual.
    const classe = ({ isActive }) => (isActive ? 'link ativo' : 'link')

    return (
        <header className="navbar">
            <nav className="navbar-links">
                {/* "end" faz o link só ficar ativo na rota exata. Sem ele,
            /livros ficaria ativo também em /livros/novo */}
                <NavLink to="/" end className={classe}>Home</NavLink>
                <NavLink to="/livros/novo" end className={classe}>Novo livro</NavLink>
                <NavLink to="/livros" end className={classe}>Livros</NavLink>
            </nav>
        </header>
    )
}