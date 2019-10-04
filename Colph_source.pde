//import librerie per copy/paste
import java.awt.*;
import java.awt.datatransfer.*;

//dichiarazione variabili
PImage img;
PImage glass;
int glassSourceSize = 200;
int glassTargetSize = 250;
float postextY = mouseY+50;
float postextX = mouseX;

//risoluzione effetto pixel

int risoluzione = 8;






void setup() {
  
  
  colorMode(RGB);
  img = loadImage("https://picsum.photos/800/600.jpg");
  size(800,600);

  
}

void draw() {
   color c = get(mouseX, mouseY); //c prende il valore del colore sotto il puntatore del mouse
   //divisione del colore in 3 canali RGB diversi
   float red = red(c);
   float blue = blue(c);
   float green = green(c);
   
  //richiamo della funzione effetto pixel
  pixella();
  
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


}
  
// funzione copia su clipboard
void copyToClipboard(String stringToCopy){
  StringSelection selection = new StringSelection(stringToCopy);
  Clipboard clipboard = Toolkit.getDefaultToolkit().getSystemClipboard();
  clipboard.setContents(selection, selection);
}


//funzione effetto pixel
void pixella() {
  img.loadPixels();

  for (int y = 0; y < img.height; y += risoluzione) {
    for (int x = 0; x < img.width; x += risoluzione) { 
      color pixel = img.pixels[y * img.width + x];
      fill(pixel);
      noStroke();
      rect(x, y-risoluzione, risoluzione, risoluzione);
      fill(255);
    }
  }
}
//istruzioni al click del mouse
  void mouseClicked(){
     color c = get(mouseX, mouseY);
    String colorhex = (hex(c, 6)); //trasformazione del valore in esadecimale e assegnazione a valore stringa
    copyToClipboard(colorhex); //richiamo della funzione copia su clipboard
  }
