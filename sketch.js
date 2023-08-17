let table;
let numpreguntas;
let listadoPreguntas = [];
let imagen;
let logo;


function setup() {
  //createCanvas(windowWidth, windowHeight);
  createCanvas(windowWidth, windowHeight);
  background(255);

  imagen = loadImage("CUENTRAS cro15082023.png");
  logo = loadImage("logo2.png");
}

function draw() {
  
  imageMode(CENTER);
  push();
  translate(width*0.5,height*0.5);
  scale(0.9);
  image(logo,0,-height*0.4);
  image(imagen, 0 ,0);
  pop();
}

