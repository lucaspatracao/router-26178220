# Biblioteca escolar — Lucas

Agenda Personalizada com React Router (SPA).

- **Aluno:** Lucas Nunes Patracão
- **RA:** 26178220

## Meus parâmetros

Dígitos do RA: 2 6 1 7 8 2 2 0

| Parâmetro | Cálculo | Resultado |
|---|---|---|
| A | dois últimos = 20; 20 mod 20 = 0 | Biblioteca escolar (slug `livros`) |
| B | antepenúltimo dígito = 2 | Não aceitar título repetido (sem diferenciar maiúsculas) |
| C | 2+6+1+7+8+2+2+0 = 28; 28 mod 6 = 4 | Lista em ordem alfabética pelo título |
| D | quarto dígito do final = 8; 8 mod 4 = 0 | Navbar horizontal no topo, links centralizados |
| Cor | três últimos = 220; 220 mod 360 = 220 | hsl(220, 60%, 35%) |

## Rotas

| Rota | Página |
|---|---|
| `/` | Home |
| `/livros/novo` | Cadastro |
| `/livros` | Visualização |
| `*` | Não encontrada |

## Como rodar

    git clone https://github.com/lucaspatracao/router-26178220.git
    cd router-26178220
    npm install
    npm run dev

## Opcionais feitos

Nenhum.