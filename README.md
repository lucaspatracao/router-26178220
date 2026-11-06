<div align="center">

# 📚 Biblioteca Escolar — Lucas

### Agenda Personalizada com React Router

![React](https://img.shields.io/badge/React-SPA-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-Rotas-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-Build-646CFF?style=for-the-badge&logo=vite&logoColor=white)

[![Site Publicado](https://img.shields.io/badge/Site_Publicado-Abrir-2EA44F?style=for-the-badge)](COLE_AQUI_O_LINK_DA_VERCEL)
[![Vídeo no Drive](https://img.shields.io/badge/V%C3%ADdeo_no_Google_Drive-Assistir-4285F4?style=for-the-badge&logo=googledrive&logoColor=white)](COLE_AQUI_O_LINK_DO_DRIVE)

</div>

---

## 👤 Identificação

| Campo | Informação |
|---|---|
| **Aluno** | Lucas Nunes Patracão |
| **RA** | 26178220 |
| **Curso** | Tecnólogo em Análise e Desenvolvimento de Sistemas |
| **Instituição** | Faculdade de Tecnologia SENAI Antonio Adolpho Lobbe — São Carlos/SP |
| **Unidade Curricular** | Desenvolvimento Front-End |

## 🧮 Meus Parâmetros

Dígitos do RA: `2 6 1 7 8 2 2 0`

| Parâmetro | Cálculo | Resultado |
|---|---|---|
| **A** | Dois últimos = 20; 20 mod 20 = 0 | Biblioteca Escolar (slug `livros`) |
| **B** | Antepenúltimo dígito = 2 | Título Repetido Bloqueado |
| **C** | 2+6+1+7+8+2+2+0 = 28; 28 mod 6 = 4 | Lista em Ordem Alfabética pelo Título |
| **D** | Quarto dígito do final = 8; 8 mod 4 = 0 | Navbar Horizontal no Topo, Links Centralizados |
| **Cor** | Três últimos = 220; 220 mod 360 = 220 | `hsl(220, 60%, 35%)` |

## 🗺️ Rotas

| Rota | Página | Acesso |
|---|---|---|
| `/login` | Login | Pública |
| `/` | Home | Privada |
| `/livros/novo` | Cadastro | Privada |
| `/livros` | Visualização | Privada |
| `/livros/:id` | Detalhes | Privada |
| `/livros/:id/editar` | Edição | Privada |
| `*` | Não Encontrada | Pública |

## 🔐 Acesso ao Sistema

| Usuário | Senha |
|---|---|
| `lucas` | `8220` |

## ✅ Opcionais Feitos

| Opcional | O Que Foi Feito | Conceito |
|---|---|---|
| **O1** | Login, Rotas Protegidas e Navbar só Após Entrar | `Navigate`, `isAuthenticated` |
| **O2** | Página de Detalhes de um Livro | `useParams`, `find` |
| **O3** | Botão Remover com Função do App | `filter`, Função como Prop |
| **O4** | Edição Reaproveitando o Formulário | `useParams`, `map` Imutável |
| **O5** | Busca pelo Título Enquanto Digita | Estado Local, `filter`, `includes` |
| **O6** | Livros Salvos no `localStorage` | `useEffect`, `JSON.stringify` |
| **O7** | Componente `RotaPrivada` | `children` |
| **O8** | Publicação na Vercel com Rotas ao Recarregar | Configuração de SPA |

## 🖼️ Prints das Telas

<table>
  <tr>
    <td align="center" width="50%">
      <b>Login</b><br>
      <img src="docs/prints/login.png" alt="Print da tela de login" width="95%">
    </td>
    <td align="center" width="50%">
      <b>Home</b><br>
      <img src="docs/prints/home.png" alt="Print da Home" width="95%">
    </td>
  </tr>
  <tr>
    <td align="center">
      <b>Cadastro — Regra de Título Repetido</b><br>
      <img src="docs/prints/cadastro.png" alt="Print do cadastro com a validação" width="95%">
    </td>
    <td align="center">
      <b>Visualização — Lista Alfabética</b><br>
      <img src="docs/prints/livros.png" alt="Print da visualização com 5 livros" width="95%">
    </td>
  </tr>
  <tr>
    <td align="center">
      <b>Detalhes do Livro</b><br>
      <img src="docs/prints/detalhes.png" alt="Print da página de detalhes" width="95%">
    </td>
    <td align="center">
      <b>Página Não Encontrada</b><br>
      <img src="docs/prints/nao-encontrada.png" alt="Print da rota coringa" width="95%">
    </td>
  </tr>
</table>

## 🎬 Vídeo de Demonstração

<div align="center">

[![Clique para Assistir ao Vídeo](docs/prints/livros.png)](COLE_AQUI_O_LINK_DO_DRIVE)

[![Assistir no Google Drive](https://img.shields.io/badge/%E2%96%B6_Assistir_no_Google_Drive-4285F4?style=for-the-badge&logo=googledrive&logoColor=white)](COLE_AQUI_O_LINK_DO_DRIVE)

**Duração:** até 3 minutos

</div>

| O Que o Vídeo Mostra | Onde |
|---|---|
| Navegação pela SPA, Login e Página Não Encontrada | Início |
| Caminho de um Registro: Formulário → Props → Estado do App → Visualização | Meio |
| Alteração ao Vivo no Código | Final |

## ▶️ Como Rodar

```bash
git clone https://github.com/lucaspatracao/router-26178220.git
cd router-26178220
npm install
npm run dev
```

Acesse `http://localhost:5173` e entre com `lucas` / `8220`.

## 🔄 Caminho de um Registro

```
Formulário (Cadastro.jsx)
   └─ handleSubmit
        └─ adicionarRegistro (função recebida por props)
             └─ setRegistros (estado do App.jsx)
                  └─ Visualizacao.jsx re-renderiza com o livro novo
```

## 🗂️ Estrutura do Projeto

```
router-26178220/
├── vercel.json
├── README.md
├── docs/prints/
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── components/
    │   ├── Navbar.jsx
    │   ├── Rodape.jsx
    │   └── RotaPrivada.jsx
    └── pages/
        ├── Login.jsx
        ├── Home.jsx
        ├── Cadastro.jsx
        ├── Visualizacao.jsx
        ├── Detalhes.jsx
        └── NaoEncontrada.jsx
```

---

<div align="center">

**Lucas Nunes Patracão** · RA 26178220

</div>