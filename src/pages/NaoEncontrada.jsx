import { Link, useLocation } from 'react-router-dom'

// Esta página aparece na rota coringa "*", quando nenhuma outra rota combina com a URL.
export default function NaoEncontrada() {
    // useLocation me dá a URL atual. O pathname é o caminho que a pessoa digitou.
    const { pathname } = useLocation()

    return (
        <section>
            <h1>Página não encontrada</h1>
            <p>O caminho <code>{pathname}</code> não existe.</p>
            {/* Link troca de página sem recarregar o navegador (por isso não uso <a href>) */}
            <Link to="/">Voltar para a Home</Link>
        </section>
    )
}