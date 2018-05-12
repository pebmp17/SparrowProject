# SparrowProject
## Índice
1. [Instalação](#instalação)
2. [Criação de novas páginas](#newPage)

### Como testar o projeto: <a name="instalação"></a>
- **Passo 1: Instale Node.JS**\
Entre no site no [node.js](https://nodejs.org/en/) e baixe o relativo à versão 8.x.\

- **Passo 2: Instalar o Ionic**\
Depois de instalado o Node.js você vai deve apertar Win-key+r. Nele, digite `cmd` e aperte enter. No cmd do windows, digite:\
   `npm install -g ionic`

- **Passo 3 Baixar os arquivos do projeto**\
Baixe os arquivos no botão verde e depois aperte em "Download Zip". Preferencialmente, coloque os arquivos em: C:/users/username.

- **Passo 4: Testar**\
Agora, dezipe o arquivo na própria pasta. Ele deve criar uma pasta chamada `master`. Abre o cmd *(mas se ainda tiver aberto é melhor ainda)* e digita:\
	`cd master`\
E depois digite:\
	`ionic serve`\
Agora o seu navegador padrão vai abrir e você poderá testa a aplicação.

### Como criar novas páginas: <a name="newPage"></a>
- **Passo 1: Crie uma nova pasta**\
Dentro de `src/pages` crie uma nova pasta. Essa pasta deve explicar a nova página, preferencialmente utilizando apenas uma palavra. Nesse tutorial iremos explicar utilizando a criação da página `exemplo`;

- **Passo 2: Copie os arquivos de uma página já existente**\
Como criar cada arquivo individualmente é bastante complexo, e as páginas existentes até agora no projeto estão bem simples, copie os arquivos da pasta `index`, e cole-os na pasta `exemplo`, conforme havia sido criada no passo anterior\

- **Passo 3: Renome os arquivos**\
Todos arquivos da pasta copiada possuem a nomenclatura `nomedapasta+extensão`. Renomeie todos os arquivos, para que eles agora sigam a nomenclatura `exemplo+extensão`.

- **Passo 4: Edite os arquivos copiados**\
Primeiramente, abra o arquivo `exemplo.ts` no seu editor de texto preferido. Nas linhas 4 substitua `page-home` por `page-exemplo`. Na linha 5, substitua `index.html` por `exemplo.html`.  Na linha 8, substitua `HomePage` por `ExemploPage`

- **Passo 5: Edite os arquivos `app.component.ts` e `app.module.ts`**\
Abre a pasta app. Nela, abra os arquivos `app.component.ts` e `app.module.ts`. Em ambos, insira a seguinte linha:\
 `import { ExemploPage } from '../pages/exemplo/exemplo';` \
 no fim da lista indicada pelo comentário "Lista para importar classes vindas dos arquivos .ts". Em `app.component.ts`, insira:\
 `{ title: 'Exemplo', component: ExemploPage },`
 dentro da lista indicada pelo comentário "Lista para navegação na side-menu". *ATENÇÃO: Caso você insira a página exemplo como último item da lista, lembre que os itens acima devem terminar com uma virgula, e remova a virgula do código acima.* Dentro de `app-module.ts`, insira `ExemploPage` dentro das 2 listas indicadas pelo comentário "Lista de páginas existentes no app"