//import librerie per copy/paste
//import java.awt.*;
//import java.awt.datatransfer.*;


var img = "https://picsum.photos/800/600.jpg";
var glassSourceSize = 200;
var glassTargetSize = 250;
//var postextY = mouseY+50;
//var postextX = mouseX;

//risoluzione effetto pixel

var risoluzione = 8;






function setup() {
  var postextY = mouseY+50;
var postextX = mouseX;


  colorMode(RGB);
  loadImage("https://picsum.photos/800/600.jpg");
  createCanvas(800,600);


}

function draw() {
   var c = get(mouseX, mouseY); //c prende il valore del colore sotto il puntatore del mouse
   //divisione del colore in 3 canali RGB diversi
   //var red = red(c);
   //var blue = blue(c);
   //var green = green(c);

  //richiamo della funzione effetto pixel
  var pixella2 = new pixella();

  //lente di ingrandimento
  glass = get(mouseX-glassSourceSize/2, mouseY-glassSourceSize/2, glassSourceSize, glassSourceSize);
  image(glass, mouseX-glassTargetSize/2, mouseY-glassTargetSize/2, glassTargetSize, glassTargetSize);



//rettangolo del colore campionato
rectMode(CENTER);
fill(c);
rect(mouseX, mouseY+50, 150, 50);
//testo codice colore negativo rispetto al colore campionato
textAlign(CENTER);
textSize(32);
fill(255 - red, 255 - blue, 255 - green);
text((hex(c, 6)), mouseX,mouseY+60);


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
  loadPixels();

  for (var y = 0; y < img.height; y += risoluzione) {
    for (var x = 0; x < img.width; x += risoluzione) {
      this.pixel = img.pixels[y * img.width + x];
      fill(pixel);
      noStroke();
      rect(x, y-risoluzione, risoluzione, risoluzione);
      fill(255);
    }
  }
}
//istruzioni al click del mouse
  function mouseClicked(){
     this.c = get(mouseX, mouseY);
    this.colorhex = (hex(c, 6)); //trasformazione del valore in esadecimale e assegnazione a valore stringa
    //copyToClipboard(colorhex); //richiamo della funzione copia su clipboard
  }
