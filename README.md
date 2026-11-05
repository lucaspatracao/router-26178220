# Biblioteca Escolar — Lucas

Agenda Personalizada com React Router (SPA).

- **Aluno:** Lucas Nunes Patracão
- **RA:** 26178220

## Meus Parâmetros

Dígitos do RA: 2 6 1 7 8 2 2 0

| Parâmetro | Cálculo | Resultado |
|---|---|---|
| A | dois últimos = 20; 20 mod 20 = 0 | Biblioteca Escolar (slug `livros`) |
| B | antepenúltimo dígito = 2 | Título Repetido Bloqueado |
| C | 2+6+1+7+8+2+2+0 = 28; 28 mod 6 = 4 | Lista Alfabética pelo Título |
| D | quarto dígito do final = 8; 8 mod 4 = 0 | Navbar Horizontal no Topo, Links Centralizados |
| Cor | três últimos = 220; 220 mod 360 = 220 | `hsl(220, 60%, 35%)` |

## Rotas

| Rota | Página |
|---|---|
| `/` | Home |
| `/livros/novo` | Cadastro |
| `/livros` | Visualização |
| `*` | Não Encontrada |

## Como Rodar

    git clone https://github.com/lucaspatracao/router-26178220.git
    cd router-26178220
    npm install
    npm run dev

## Opcionais Feitos

Nenhum.