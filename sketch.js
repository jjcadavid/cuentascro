let table;
let numpreguntas;
let listadoPreguntas = [];
let imagenIngresos;
let imagenEgresos;
let logo;
let saldo;


function setup() {
  //createCanvas(windowWidth, windowHeight);
  createCanvas(1920, 1080);
  background(255);

  imagenIngresos = loadImage("IngresosCRO.PNG");
  imagenEgresos = loadImage("egresoCRO.PNG");
  logo = loadImage("logo2.png");
  saldo=loadImage("saldoCRO.PNG");
}

function draw() {
  image(logo,-width*0.1,height*0.02,width*0.5,height*0.4);
  image(imagenIngresos, width * 0.05, height * 0.15);
  image(imagenEgresos, width * 0.05, height * 0.4);
  image(saldo,width * 0.27, height * 0.65);
}

