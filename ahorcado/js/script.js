//eventos

//getElements//
var jugar = document.getElementById("play");

var volver = document.getElementById("res");

var dificultad = 0;
var intentos_totales = 10;
var letras_dichas = [];
var id_palabra = 0;

var inicio = (dif) => {
  $("#pista").html("");
  $("#iniciar").prop("disabled", true);
  $(".botones_teclado").prop("disabled", false);
  $(".botones_pista").prop("disabled", false);
  imprimir();
  intentos_totales = dif;
  //seteamos las variables
  game_over = false;
  id_palabra = Math.floor(Math.random() * palabras.length);
  letras_dichas = [];
  imprimir();
  $("#dificultad").hide();
};

var juego = (letra) => {};

var turno = (letra) => {
  $("#" + letra.toUpperCase()).prop("disabled", true);
  if (!compruebaLetra(letra.toString())) {
    intentos_totales--;
    console.log("no está!");
  } else console.log("Si está !");
  letras_dichas.push(letra);
  imprimir();
  if (!imprimeLetra().includes("_")) {
    hasganado();
  }
  if (intentos_totales == 0) {
    gameover();
  }
};

var hasganado = () => {
  deshabilitar();
  $("#palabra").html("Has ganado !!");
  $("#iniciar").prop("disabled", false);
};

var gameover = () => {
  deshabilitar();
  $("#palabra").html("Has perdido");
  $("#iniciar").prop("disabled", false);
};

var imprimir = () => {
  $("#ahorcado").attr("src", "img/a" + (10 - intentos_totales) + ".png");
  $("#palabra").html(imprimeLetra());
  $("#corazon").html("");
  for (let i = 0; i < intentos_totales; i++) {
    $("#corazon").append('<img src="img/vida.png">');
  }
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

//
var yo;
window.onload = function (event) {
  $(".botones_teclado").click(function () {
    turno($(this).attr("id").toLowerCase());
  });
  $(".botones_pista").click(function () {
    pista($(this).attr("id"));
  });
  $("#iniciar").click(function () {
    pregunta();
  });

  deshabilitar();
};

var pista = (id) => {
  if (intentos_totales > 1) {
    intentos_totales--;
    $("#" + id).prop("disabled", true);
    $("#pista").html(pistas[id_palabra][id - 1]);
    imprimir();
  }
};

var deshabilitar = () => {
  $(".botones_teclado").prop("disabled", true);
  $(".botones_pista").prop("disabled", true);
};

var pregunta = () => {
  $("#dificultad").show();
};
