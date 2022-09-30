
<h1 align="center" style="color:#70ae6e" id="topo"> <b>Afro Academy - AfroTour - Sua Viagem começa aqui</b></h1>

[🔙 - Voltar para Repositório Principal](https://github.com/RickHardBR/AfroAcademy)

## 

 * [Indice](#funciona)
      * [Link GitPages]()
      * [O Desafio](#desafio)
      * [Link do Figma](#figma)
      * [Criando uma aplicação com Vite](#vite)
      * [Imagens do projeto](#imagens)

🗃️
<a type="file" href="">Baixar Aplicação compactada</a>

<h2 align="center" style="color:#70ae6e" id="desafio"><b>O Desafio</b></h2>

Para o desafio 03 você irá precisar conhecer o básico da estrutura do React.

O objetivo desse desafio é criar uma pagina de turismo a **AfroTour**. 

O que será necessário:

- Criar o Header
- Criar os cards de cada região
- Criar a página de cada região
- criar o footer


<h3 align="center" id="figma" style="color:#blue">Link do figma</h3>

[https://www.figma.com/file/fryZd1TVWnvBHiXayhDKkm/AfroTour?node-id=5%3A147](https://www.figma.com/file/fryZd1TVWnvBHiXayhDKkm/AfroTour?node-id=5%3A147)

 📒 O app deverá ser criado usando [React](https://reactjs.org/)

 Na raiz do projeto, será necessário incluir um arquivo README.md com as instruções para construir seu projeto localmente. Opcionalmente você pode detalhar as razões pelas escolhas de ferramentas e técnicas aplicadas ao desafio.

 📒 O app deverá se comportar da mesma forma na última versão estável dos seguintes browsers: Chrome, Firefox, Edge

 📒 O app deverá ser responsivo

<h4 align="right"><a href="#topo">⬆️Topo</a></h4>

<h2 id="vite" align="center"><b>Criando uma aplicação com Vite</b></h2>

Vite é uma ferramenta para o desenvolvedor(a) frontend, o significado de sua palavra vem do francês, que significa “rápido” . Criado por “Evan You”, o mesmo criador do Vue.js. O Vite promete :

💡 Servidor Instantâneo.

⚡️ Hot reload ultrarrápido.

🛠️ Suporte à: Typescript, JSX, CSS e mais…

📦 Compilações otimizadas usando rollup.

🔩 Plugins universais.

🔑Totalmente tipado.

**Pode ser usado**

* JavaScript
* Vue.js
* React
* Preactjs
* LitElement
* Svelte

**Criando seu primeiro projeto Vite**

_**Você pode criá-lo com NPM ou Yarn**_

![image](https://user-images.githubusercontent.com/89301596/190332783-eefc6af1-9b37-495f-b2fc-2c64fdba6627.png)

_Em seguida você poderá adicionar o nome do projeto, nesse caso vamos chamá-lo de “projeto-vite”. Também podemos selecionar a framework que desejamos utilizar e em seguida entrar na pasta._

<h4 align="right"><a href="#topo">⬆️Topo</a></h4>

## **Passa a Passo**

**Começando seu projeto**

01)-Crie uma pasta com o nome do projeto.
02)-Abra a pasta e dentro dela abra o VSCode com o botão direito do mouse:

![image](https://user-images.githubusercontent.com/89301596/190339129-edc53383-2e49-4014-8389-451383a90a9d.png)

<h4 align="right"><a href="#topo">⬆️Topo</a></h4>

03)-Com o VSCode aberto, abra um terminal:

![image](https://user-images.githubusercontent.com/89301596/190339391-9a666c44-64cf-49a7-a2a7-a0ffc17470bc.png)

## Formas de iniciar seu projeto:

**Com NPM:**

~~~
npm create vite@latest
~~~

**Com Yarn:**

~~~
yarn create vite
~~~

**Com PNPM:**

~~~
$ pnpm create vite
~~~

<h4 align="right"><a href="#topo">⬆️Topo</a></h4>
# Levando em consideração a criação com NPM

![image](https://user-images.githubusercontent.com/89301596/190340070-9d396332-2d7c-4718-9c9a-87c711faa548.png)

_Após dar **Enter** você precisa indicar um nome:_

![image](https://user-images.githubusercontent.com/89301596/190340194-877d0e14-b72b-4510-8a50-f155a424debf.png)


_Você pode dar o nome que quiser. Ex: landing-page_

Você também pode escolher o nome que melhor se adeque a sua aplicação ou basta digitar um sinal de ponto (.) que a aplicação terá o nome da pasta do projeto, lembrando que não pode ter letra maiúscla.

![image](https://user-images.githubusercontent.com/89301596/190340624-b178be78-cfd8-4062-a77a-59e6ee6aad80.png)

<h4 align="right"><a href="#topo">⬆️Topo</a></h4>

Depois de dar o nome ou apenas o ponto será perguntando qual o framework você utilizará, estamos usando o React, use as setas do teclado para escolhe-lo e assim que chegar nele, tecle Enter:

![image](https://user-images.githubusercontent.com/89301596/190340748-c1649efd-14d8-434a-822f-51ea55fd3a00.png)

Uma nova pergunta é feita, pedindo que escolha a variante, escolha JavaScript apertando Enter ou caso queira iniciar sua aplicação com TypeScript use a seta para abaixo do teclado e aperte Enter.

![image](https://user-images.githubusercontent.com/89301596/190341371-020dae67-3871-4402-ad61-8f9c3906439f.png)

<h4 align="right"><a href="#topo">⬆️Topo</a></h4>
Pronto, sua aplicação foi criada:

![image](https://user-images.githubusercontent.com/89301596/190341626-8861796b-f31f-49ac-bb37-7054c9aaa47e.png)

Porém antes de continuar, você precisa instalar as dependências, começe por

~~~
npm i
~~~
ou
~~~
npm Install
~~~


![image](https://user-images.githubusercontent.com/89301596/190342516-9d125dbb-acdb-48a1-95ce-69868266b621.png)

<h4 align="right"><a href="#topo">⬆️Topo</a></h4>
após dar Enter, começará a instalação:

![image](https://user-images.githubusercontent.com/89301596/190342677-0e86f0fc-66ac-4fe5-93cb-7b1298685418.png)


Após a instalação das dependências, o terminal estará liberado, e você pode notar uma nova pasta: node_modules

![image](https://user-images.githubusercontent.com/89301596/190343087-46da6b4e-1a83-4f3b-a6f0-fc6e3fb07a80.png)

✨E assim o projeto está pronto! ✨

<h4 align="right"><a href="#topo">⬆️Topo</a></h4>

Para começar sua aplicação no navegador, no terminal digite:

~~~
npm run dev
~~~

o servidor local será criado para apresentar a aplicação:

![image](https://user-images.githubusercontent.com/89301596/190343357-1ccef5fb-4efd-4480-a0e4-5bc6a90767b0.png)

com o servidor criado, basta segurar a tecla CRTL e clicar sobre o endereço que aparece no terminal:

![image](https://user-images.githubusercontent.com/89301596/190343603-cda9f117-9f4c-4eb1-8ab1-cf133db75945.png)

<h4 align="right"><a href="#topo">⬆️Topo</a></h4>


✨ Essa será a primeira tela que aparecerá no seu navegador ✨

![image](https://user-images.githubusercontent.com/89301596/190343705-a7dd6a65-70da-4ea3-802e-9236c6e5b1ce.png)


**Conclusão**

Se comparado com o creat-react-app , o Vite é bem melhor, possuindo um build de 14x mais rápido e o tamanho é consideravelmente menor. O resultado é realmente incrível, como podemos ver na tabela abaixo, extraído da minha experiência, criando dois projetos ao mesmo tempo usando essas duas ferramentas.


Com certeza é uma opção a considerar na hora de criar seu novo projeto. 

<h4 align="right"><a href="#topo">⬆️Topo</a></h4>

<h1 id="imagens">Imagens</h1>

#### Básico

> Tela inicial sem tarefas

<img align="center" src="g">

<h4 align="right"><a href="#topo">⬆️Topo</a></h4>

---

> Tela com algumas tarefas

<img align="center" src="">

<h4 align="right"><a href="#topo">⬆️Topo</a></h4>

---

> Tela com uma tarefa marcada como concluída

<img align="center" src="">

<h4 align="right"><a href="#topo">⬆️Topo</a></h4>

