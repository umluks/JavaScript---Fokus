/*
document

    Descrição: O document é um objeto global que representa o conteúdo do documento HTML carregado no navegador. Ele fornece métodos e propriedades para acessar e manipular elementos e o conteúdo da página web.
*/

/*
querySelector

    Descrição: O querySelector é um método do objeto document que permite selecionar o primeiro elemento que corresponde ao seletor CSS especificado. Ele aceita uma string como argumento, que pode ser um seletor de classe, ID, elemento HTML, ou qualquer combinação desses.
*/
const html = document.querySelector("html");

const timer = document.querySelector(".app__card-timer");

const appImg = document.querySelector(".app__image");

const appTitle = document.querySelector(".app__title");

const btnFoco = document.querySelector(".app__card-button--foco");
const btnCurto = document.querySelector(".app__card-button--curto");
const btnLongo = document.querySelector(".app__card-button--longo");
const btnTimer = document.getElementById("start-pause");

let valorTimerFoco = 1500;
let valorTimerCurto = 300;
let valorDescansoLongo = 900;

/* 
addEventListener

    Descrição: O addEventListener é um método que adiciona um ouvinte de evento a um elemento HTML. Esse ouvinte de evento será executado quando o evento especificado ocorrer no elemento.
    Parâmetros:
        Evento: O tipo de evento a ser ouvido (por exemplo, "click", "mouseover").
        Função de callback: A função que será chamada quando o evento ocorrer. 
*/

/*
setAttribute

    Descrição: O setAttribute é um método que define o valor de um atributo de um elemento HTML. Ele pode ser usado para adicionar novos atributos ou modificar os existentes.
    Parâmetros:
        Nome do atributo: O nome do atributo que você deseja definir.
        Valor do atributo: O valor a ser atribuído ao atributo.
*/

btnFoco.addEventListener("click", () => {
  // Quando o botão 'btnFoco' é clicado, o atributo 'data-contexto' do elemento <html> é definido como "foco".
  html.setAttribute("data-contexto", "foco");
});

btnCurto.addEventListener("click", () => {
  // Quando o botão 'btnCurto' é clicado, o atributo 'data-contexto' do elemento <html> é definido como "descanso-curto".
  html.setAttribute("data-contexto", "descanso-curto");
});

btnLongo.addEventListener("click", () => {
  // Quando o botão 'btnLongo' é clicado, o atributo 'data-contexto' do elemento <html> é definido como "descanso-longo".
  html.setAttribute("data-contexto", "descanso-longo");
});

appImg.addEventListener("click", () => {
  html.setAttribute("app__image", "descanso-longo.png");
});

console.log(
  html,
  timer,
  appImg,
  appTitle,
  btnFoco,
  btnCurto,
  btnLongo,
  btnTimer,
  valorTimerFoco,
  valorTimerCurto,
  valorDescansoLongo
);
