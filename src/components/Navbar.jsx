import { NavLink } from 'react-router-dom'

// Props que vêm do App:
//  - autenticado: true/false (O1)
//  - sair: função do App que faz o logout
export default function Navbar({ autenticado, sair }) {
    // O1: sem login eu não mostro a navbar
    if (!autenticado) return null

    // O NavLink aceita uma função no className. Ela recebe { isActive }
    // e eu devolvo a classe com destaque quando o link é da página atual.
    const classe = ({ isActive }) => (isActive ? 'link ativo' : 'link')

    return (
        <header className="navbar">
            <nav className="navbar-links">
                {/* O "end" faz o link só ficar ativo na rota exata. Sem ele,
            "/livros" ficaria ativo também em "/livros/novo". */}
                <NavLink to="/" end className={classe}>Home</NavLink>
                <NavLink to="/livros/novo" end className={classe}>Novo livro</NavLink>
                <NavLink to="/livros" end className={classe}>Livros</NavLink>
                <button className="link" onClick={sair}>Sair</button>
            </nav>
        </header>
    )
}