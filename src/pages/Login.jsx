import { useState } from 'react'
import { Navigate } from 'react-router-dom'

// Usuário e senha que o enunciado pede: meu primeiro nome em minúsculas
// e os 4 últimos dígitos do meu RA.
const USUARIO = 'lucas'
const SENHA = '8220'

// Props que vêm do App:
//  - autenticado: true/false, para saber se já estou logado
//  - entrar: função do App que marca o login como feito
export default function Login({ autenticado, entrar }) {
    const [usuario, setUsuario] = useState('')
    const [senha, setSenha] = useState('')
    const [erro, setErro] = useState('')

    // Se já estou logado, não faz sentido ver o login e vou para a Home.
    // É isso também que me leva para a Home logo depois que o entrar() funciona.
    if (autenticado) return <Navigate to="/" replace />

    function handleSubmit(e) {
        e.preventDefault()
        if (usuario.trim().toLowerCase() === USUARIO && senha === SENHA) {
            entrar()
        } else {
            setErro('Usuário ou senha incorretos.')
        }
    }

    return (
        <section>
            <h1>Entrar</h1>
            <p>Faça login para acessar o acervo.</p>

            <form className="form-login" onSubmit={handleSubmit}>
                <label>Usuário
                    <input
                        value={usuario}
                        onChange={(e) => setUsuario(e.target.value)}
                        autoComplete="username"
                    />
                </label>
                <label>Senha
                    <input
                        type="password"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        autoComplete="current-password"
                    />
                </label>

                {erro && <p className="erro">{erro}</p>}
                <button className="botao" type="submit">Entrar</button>
            </form>
        </section>
    )
}