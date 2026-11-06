import { Navigate } from 'react-router-dom'

// O7: componente que protege uma rota. Recebo:
//  - autenticado: true/false, que vem do App
//  - children: a página que fica entre <RotaPrivada> e </RotaPrivada>
// Assim não preciso repetir o ternário (autenticado ? pagina : Navigate) em cada rota.
export default function RotaPrivada({ autenticado, children }) {
    // O "replace" troca a página atual no histórico, então o botão "voltar"
    // do navegador não leva a uma página protegida.
    return autenticado ? children : <Navigate to="/login" replace />
}