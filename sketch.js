var glassSourceSize = 50;
var glassTargetSize = 200;

//risoluzione effetto pixel

var risoluzione = 4;

var img;



function preload() {
 img =  loadImage("https://picsum.photos/800/600.jpg");

}
function setup() {
  var postextY = mouseY + 50;
  var postextX = mouseX;

  colorMode(RGB);
  
  createCanvas(500, 500);
  img.resize(width,height);
  img.loadPixels();
}

function draw() {
  var c = get(mouseX, mouseY); //c prende il valore del colore sotto il puntatore del mouse
  //divisione del colore in 3 canali RGB diversi
  var r = red(c);
  var b = blue(c);
  var g = green(c);

  image(img,0,0);
  //richiamo della funzione effetto pixel
  //pixella();

  //lente di ingrandimento
  let glass = get(mouseX - glassSourceSize / 2, mouseY - glassSourceSize / 2, glassSourceSize, glassSourceSize);
  image(glass, mouseX - glassTargetSize / 2, mouseY - glassTargetSize / 2, glassTargetSize, glassTargetSize);



  //rettangolo del colore campionato
  textAlign(CENTER);
  textSize(12);
  rectMode(CENTER);
  fill(c);
  let caption = str("" +hex(c, 6));
  rect(mouseX, mouseY, textWidth(caption), 24);
  //testo codice colore negativo rispetto al colore campionato
  fill(255 - r, 255 - b, 255 - g);
  text(caption, mouseX, mouseY );


  //}

  // funzione copia su clipboard
  //function copyToClipboard(String stringToCopy){
  //StringSelection selection = new StringSelection(stringToCopy);
  //Clipboard clipboard = Toolkit.getDefaultToolkit().getSystemClipboard();
  //clipboard.setContents(selection, selection);
  //}

}
//funzione effetto pixel
function pixella() {
  for (var y = 0; y < img.height; y += risoluzione) {
    for (var x = 0; x < img.width; x += risoluzione) {
      let r = img.pixels[y * img.width + x];
      let g = img.pixels[y * img.width + x + 1];
      let b = img.pixels[y * img.width + x + 2];
      fill(r,g,b);
      noStroke();
      rect(x, y - risoluzione, risoluzione, risoluzione);
      //fill(255);
    }
  }
}
//istruzioni al click del mouse
function mouseClicked() {
  this.c = get(mouseX, mouseY);
  this.colorhex = (hex(c, 6)); //trasformazione del valore in esadecimale e assegnazione a valore stringa
  //copyToClipboard(colorhex); //richiamo della funzione copia su clipboard
}
