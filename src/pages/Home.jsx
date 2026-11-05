// Props vindas do App: nomeSistema (constante) e quantidade (registros.length).
export default function Home({ nomeSistema, quantidade }) {
    return (
        <section>
            <h1>{nomeSistema}</h1>
            <p>Desenvolvido por <strong>Lucas Nunes Patracão</strong>.</p>
            <p>Livros cadastrados: <strong>{quantidade}</strong></p>
        </section>
    )
}