let table;
let numpreguntas;
let listadoPreguntas = [];
let imagen;
let logo;


function setup() {
  //createCanvas(windowWidth, windowHeight);
  createCanvas(1920, 1080);
  background(255);

  imagen = loadImage("CUENTRAS cro15082023.png");
  logo = loadImage("CUENTRAS cro15082023.png");
}

function draw() {
  image(logo,-width*0.1,height*0.02,width*0.5,height*0.4);
  imageMode(CENTER);
  image(imagen, width * 0.5, height * 0.5);
}

