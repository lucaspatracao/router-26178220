import { Link, useLocation } from 'react-router-dom'

export default function NaoEncontrada() {
    // useLocation devolve a URL atual. O pathname é o caminho digitado.
    const { pathname } = useLocation()

    return (
        <section>
            <h1>Página não encontrada</h1>
            <p>O caminho <code>{pathname}</code> não existe.</p>
            <Link to="/">Voltar para a Home</Link>
        </section>
    )
}