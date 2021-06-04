var alfabeto = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "Ñ",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

//getElements//
var jugar = document.getElementById("play");

var volver = document.getElementById("res");

var dificultad = 0;
var intentos_realizados = 0;
var intentos_totales = 10;
var letras_dichas = [];
var id_palabra = 0;
var gameover = false;

var inicio = (id) => {
  //seteamos la dificultad
  if (dificultad == 1) {
    intentos_totales = 8;
  } else if (dificultad == 2) {
    intentos_totales = 6;
  }
  //seteamos las variables
  game_over = false;
  intentos_realizados = 0;
  id_palabra = id;
  letras_dichas = [];
};

var juego = (letra) => {};

var turno = (letra) => {
  if (!gameover) {
    $("#" + letra).prop("disabled", true);
    if (!compruebaLetra(letra.toString())) {
      intentos_totales--;
      console.log("no está!");
    } else console.log("Si está !");
    letras_dichas.push(letra);
    imprimir();
  }
};

var imprimir = () => {
  $(pista).html(imprimeLetra());
};

var imprimeLetra = () => {
  let temp = palabras[id_palabra].split("");
  let temp2 = "";

  for (let i = 0; i < temp.length; i++) {
    if (letras_dichas.includes(temp[i])) {
      temp2 += temp[i];
    } else temp2 += "_";
  }
  return temp2;
};

var compruebaLetra = (Letra) => {
  let temp = palabras[id_palabra].split("");
  if (temp.includes(Letra)) {
    return true;
  } else return false;
};

var palabras = [
  "cangrejo",
  "mapache",
  "papelera",
  "circular",
  "guitarra",
  "macarrones",
  "botella",
  "cervezas",
  "yugoslavia",
  "clavicula",
];

var pistas = [
  [
    "Es un animal marino",
    "Se alimenta de peces muertos",
    "Son apreciados en gastronomía",
    "Suelen tener movimiento errante",
    "Pueden regenerar sus partes mutiladas",
  ],
  [
    "Es un animal terrestre",
    "Se alimenta de todo",
    "Transmiten la rabia.",
    "A pesar de su aspecto,suelen ser agresivos",
    "Tienen un antifaz natural",
  ],
  [
    "Puede ser de plastico o metal",
    "Puede contener de todo",
    "Está en una aula",
    "Es un articulo de papelería",
    "Suele contener basura",
  ],
  [
    "Es un verbo",
    "Es también la propiedad de una forma",
    "Tiene dos erres",
    "Es sinonimo de transitar",
    "Documento que se da en una junta",
  ],
  [
    "Instrumento musical",
    "Suele ser de madera",
    "Es de cuerda",
    "Tiene 5 cuerdas",
    "Puede conectarse a un amplificador",
  ],
  [
    "Suelen venir con tomate",
    "Es una comida",
    "Tiene muchos carbohidratos",
    "Es un plato italiano",
    "Puede llevar carne picada",
  ],
  [
    "Pueden ser de cristal",
    "Contienen liquido",
    "Tiene alta tasa de reciclaje",
    "Suelen ser translucidas",
    "No soportan caidas medianas o grandes",
  ],
  [
    "Es en plural",
    "contiene dos E",
    "Fue inventada por los egipcios",
    "Es amarilla o ambar",
    "Está hecha con cevada",
  ],
  [
    "Era un pais",
    "Es una zona ex-sovietica",
    "Su escudo son 6 anotorchas",
    "Ahora son 7 paises",
    "El rio Sava cruza la región",
  ],
  [
    "Es un hueso",
    "Tiene forma de S",
    "Tiene todas las vocales excepto la O y la E",
    "Es una palabra llana",
    "Funciona como estabilizador para todas las partes del hombro",
  ],
];
