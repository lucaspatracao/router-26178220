// O rodapé não recebe props. Fica fora do <Routes> no App,
// então aparece em todas as páginas, como o enunciado pede (R7).
export default function Rodape() {
    return (
        <footer className="rodape">
            Lucas Nunes Patracão — RA 26178220
        </footer>
    )
}