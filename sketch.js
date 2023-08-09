let table;
let numpreguntas;
let listadoPreguntas = [];
let imagenIngresos;
let imagenEgresos;
let logo;
let saldo;

function preload() {
  tabla = loadTable("/Cuentas/ingresosCRO.csv", "csv", "header");
  imagenIngresos = loadImage("/Imagenes/IngresosCRO.PNG");
  imagenEgresos = loadImage("Imagenes/egresoCRO.PNG");
  logo = loadImage("Imagenes/logo2.png");
  saldo=loadImage("Imagenes/saldoCRO.PNG");
}
function setup() {
  //createCanvas(windowWidth, windowHeight);
  createCanvas(1920, 1080);
  background(255);
  numpreguntas = tabla.getRowCount();
  for (let i = 0; i < numpreguntas; i++) {
    //tabla.rows[i].arr[0];
    //tabla.rows[i].arr[5];

    for (let j = 0; j < 4; j++) {
      //listadoPreguntas[i].respuestas[j] = tabla.rows[i].arr[j + 1];
    }
  }
  print(tabla.rows[0].arr[0]);
  //text(tabla.rows[0].arr[5],0,20);
  //print(listadoPreguntas);
}

function draw() {
  image(logo,-width*0.1,height*0.02,width*0.5,height*0.4);
  image(imagenIngresos, width * 0.05, height * 0.15);
  image(imagenEgresos, width * 0.05, height * 0.4);
  image(saldo,width * 0.27, height * 0.65);
}

function draw() {
  image(logo,-width*0.1,height*0.02,width*0.5,height*0.4);
  image(imagenIngresos, width * 0.05, height * 0.15);
  image(imagenEgresos, width * 0.05, height * 0.4);
  image(saldo,width * 0.27, height * 0.65);
}
