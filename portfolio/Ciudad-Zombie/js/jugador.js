/* El objeto jugador es un objeto literal que se encuentra incompleto.
 Solo tiene asignadas algunas de sus propiedades y ningun metodo */
var Jugador = {
  /* el sprite contiene la ruta de la imagen
  */
  sprite: 'imagenes/auto_rojo_abajo.png',
  x: 130,
  y: 160,
  ancho: 15,
  alto: 30,
  velocidad: 10,
  vidas: 5,
  //función para mover Jugador
  mover: function(movX,movY){
    var cambiarLugarX = Jugador.x+movX
    var cambiarLugarY = Jugador.y+movY
    Jugador.x=cambiarLugarX;
    Jugador.y=cambiarLugarY;
  },

  rotatePhoto: function(tecla){
    if (tecla == 'izq'){
      this.sprite= 'imagenes/auto_rojo_izquierda.png';
      this.ancho= 30;
      this.alto= 15;
    }else if(tecla == 'der'){
      this.sprite= 'imagenes/auto_rojo_derecha.png';
      this.ancho= 30;
      this.alto= 15;
    }else if(tecla == 'arriba'){
      this.sprite= 'imagenes/auto_rojo_arriba.png';
      this.ancho= 15;
      this.alto= 30;
    }else if(tecla == 'abajo'){
      this.sprite= 'imagenes/auto_rojo_abajo.png';
      this.ancho= 15;
      this.alto= 30;
    }
  },

  perderVidas: function(cantVidas){
    var vidas=this.vidas;
    newVidas= vidas-cantVidas;
    this.vidas=newVidas;

    console.log(newVidas);

  }

  }


