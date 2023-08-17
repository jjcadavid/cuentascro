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
  image(logo,0,-height*0.4);
  scale(1);
  
  image(imagen, 0 ,0);
  pop();
}

