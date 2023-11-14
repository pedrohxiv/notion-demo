# Projeto Demo Notion

## Descrição do Projeto

Este projeto é um clone completo do Notion, desenvolvido utilizando as tecnologias mais recentes, incluindo Next.js 14, React, Convex, Tailwind, e outras. O objetivo é proporcionar uma experiência de usuário semelhante à do Notion, com recursos avançados, uma interface amigável e suporte para funcionalidades em tempo real.

## Principais Funcionalidades

- **Banco de Dados em Tempo Real:** Utilizei Convex para criar um banco de dados em tempo real, permitindo atualizações instantâneas e colaboração em tempo real.

- **Editor Estilo Notion:** Desenvolvi um editor semelhante ao Notion, oferecendo formatação avançada, capacidade de anexar arquivos, e suporte para listas, tabelas e muito mais.

- **Modo Claro e Escuro:** Implementei um modo claro e escuro para proporcionar aos usuários a opção de escolher a aparência que preferem.

- **Documentos Infinitos:** Os usuários podem criar documentos ilimitados com uma estrutura hierárquica expansível.

- **Lixeira e Exclusão Suave:** Adicionei a funcionalidade de lixeira para permitir a recuperação de documentos excluídos e uma experiência de exclusão suave.

- **Autenticação Segura:** Implementei autenticação utilizando Clerk e Next.js para garantir um ambiente seguro e protegido.

- **Upload e Gerenciamento de Arquivos:** Os usuários podem fazer upload de arquivos, substituí-los e excluí-los conforme necessário.

- **Ícones Dinâmicos:** Cada documento possui um ícone dinâmico que muda em tempo real, proporcionando uma experiência visual aprimorada.

- **Barra Lateral Expansível:** A barra lateral é totalmente expansível, permitindo uma navegação fácil e intuitiva.

- **Total Responsividade Móvel:** O projeto é totalmente responsivo para garantir uma experiência consistente em dispositivos móveis.

- **Publicação na Web:** Os usuários têm a opção de publicar seus documentos na web para compartilhamento fácil.

... e muito mais!

## Dependências

O projeto utiliza várias dependências para garantir seu funcionamento suave. Algumas das principais dependências incluem:

- `@blocknote/core`: ^0.9.6
- `@blocknote/react`: ^0.9.6
- `@clerk/clerk-react`: ^4.28.0
- `@edgestore/react`: ^0.1.4
- `@edgestore/server`: ^0.1.4
- `@radix-ui/react-alert-dialog`: ^1.0.5
- `@radix-ui/react-avatar`: ^1.0.4
- `@radix-ui/react-dialog`: ^1.0.5
- `@radix-ui/react-dropdown-menu`: ^2.0.6
- `@radix-ui/react-label`: ^2.0.2
- `@radix-ui/react-popover`: ^1.0.7
- `@radix-ui/react-slot`: ^1.0.2
- `class-variance-authority`: ^0.7.0
- `clsx`: ^2.0.0
- `cmdk`: ^0.2.0
- `convex`: ^1.5.1
- `emoji-picker-react`: ^4.5.15
- `lucide-react`: ^0.292.0
- `next`: ^14.0.2
- `next-themes`: ^0.2.1
- `react`: ^18
- `react-dom`: ^18
- `react-dropzone`: ^14.2.3
- `react-textarea-autosize`: ^8.5.3
- `sonner`: ^1.2.0
- `tailwind-merge`: ^2.0.0
- `tailwindcss-animate`: ^1.0.7
- `usehooks-ts`: ^2.9.1
- `zod`: ^3.22.4
- `zustand`: ^4.4.6

## Como Executar o Projeto

1. Clone este repositório em sua máquina local.
2. Crie um arquivo `.env.local` na raiz do projeto com as seguintes variáveis e seus respectivos valores:

   ```env
   CONVEX_DEPLOYMENT=seu_valor_aqui

   NEXT_PUBLIC_CONVEX_URL=seu_valor_aqui

   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=seu_valor_aqui
   CLERK_SECRET_KEY=seu_valor_aqui

   EDGE_STORE_ACCESS_KEY=seu_valor_aqui
   EDGE_STORE_SECRET_KEY=seu_valor_aqui
   ```

   Certifique-se de substituir `seu_valor_aqui` pelos valores corretos.

3. Execute o seguinte comando para instalar as dependências do projeto:

   ```bash
   npm install
   ```

4. Para iniciar o servidor backend, utilize o seguinte comando:

   ```bash
   npx convex dev
   ```


5. Para iniciar o servidor frontend, utilize o seguinte comando:

   ```bash
   npm run dev
   ```

6. Acesse a plataforma em `http://localhost:3000` e comece a explorar e interagir com a experiência Notion aprimorada.
