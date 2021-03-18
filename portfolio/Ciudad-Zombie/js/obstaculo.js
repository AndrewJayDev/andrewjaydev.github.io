/* Un objeto que representa a los obstaculos. Recibe un sprite que tendra la
imagen que lo representa y una potencia indicando cuando danio hace al chocar
al jugador, ademas de los parametros comunes x, y, ancho y alto*/
var Obstaculo = function (sprite, x, y, ancho, alto, potencia) {
  this.sprite = sprite;
  this.x = x;
  this.y = y;
  this.ancho = ancho;
  this.alto = alto;
  this.potencia = potencia;
  this.ocultarse = function () {
    this.x = -100;
    this.y = -100;
  }
}
//funcion por si el jugador choca con un obstaculo, quita vidas
Obstaculo.prototype.chocar=function(jugador,potencia,obstaculo){
    jugador.perderVidas(potencia);
    //flash
    flash();
    //reduce la potencia del obstaculo a 0 despues de un choque 
    obstaculo.potencia=0;
  }