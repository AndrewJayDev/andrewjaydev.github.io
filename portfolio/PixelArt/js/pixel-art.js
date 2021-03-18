var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

//Variable para seleccionar #paleta del dom y guardarlo en un variable 
var paleta = document.getElementById("paleta");

//Variable para seleccionar #grilla-pixeles del dom y guardarlo en un variable 
var grillaPixeles = document.getElementById("grilla-pixeles");
//variable para seleccionar #indicador-de-color del dom
var indicador= document.getElementById("indicador-de-color");
//variable que es falso cuando el mouse no esta apretado y true si esta apretado
var mouseDown;
//Variable para seleccionar los divs del ID #grilla-pixeles del dom
var grillaDivs= grillaPixeles.getElementsByTagName("div");



//function que recorra la lista de colores nombreColores y cree un elemento div
$(document).ready(function crearDivPaleta(){
  for(var i = 0; i<nombreColores.length; i++){
    var divNuevo = document.createElement("div");
    //asigne clase .color-paleta
    divNuevo.className ="color-paleta";
    //asigne un background-color: color
    divNuevo.style.backgroundColor= nombreColores[i];
    //Agrega un Id which que es el mismo del color 
    divNuevo.id = nombreColores[i];
    //agrega el elemento como hijo del elemento paleta
    paleta.appendChild(divNuevo);
    };
 });

 //Codigo que crea cajas de la grilla

function crearCajasPixeles(){
  var numeroDePixeles=1750;
  //un for que recorre el numeroDePixeles para luego crear los pixeles
  for(var i = 0; i<numeroDePixeles; i++){
    //crea un div para cada pixel
  var pixel=document.createElement("div");
  //asigna un className a cada pixel
  pixel.className="cursor-personalizado";
  //agrega el div al dom como hijo del div grillaPixeles
	grillaPixeles.appendChild(pixel);
	
  };
};
crearCajasPixeles(grillaPixeles);

// funcion que cambia el color del pixel cliqueado 
$(document).ready(function changeColor(){
  // escucha para un click del div de #grilla-pixeles
  $("#grilla-pixeles div").click(function(){
    console.log(this);
    //invoka la función para cambiar los colores 
    cambioColordePixel(this);
  })
  // change background color of selected div to color of pincel 
});

//Cambia el color del fondo del div seleccionado al color de indicador-de-color
function cambioColordePixel(selection){
  var element= selection
  var pincelColor=indicador.style.backgroundColor;
  console.log(pincelColor);
  element.style.backgroundColor=pincelColor;
};

//funcion que escucha para un click y guarda el color del div selecionado en un variable
function onPaletaClick(event) {
  var IndicadorDeColor = document.getElementById("indicador-de-color");
  IndicadorDeColor.style.backgroundColor = event.target.style.backgroundColor;
 };

 window.onload=function seleccionarColorEnPaleta() {
  var paleta = document.getElementById("paleta");
  paleta.addEventListener("click", onPaletaClick);
 };
//función que cambia el color del fondo del indicador-de-color

 function cambioIndicador(color){
  indicador.style.backgroundColor=color;
};

 

// Variable para guardar el elemento 'color-personalizado'
var colorPersonalizado = document.getElementById('color-personalizado');

colorPersonalizado.addEventListener('change', 
  (function() {
    // Se guarda el color de la rueda en colorActual
    colorActual = colorPersonalizado.value;
    cambioIndicador(colorActual);
  })
);

//dos funciónes que detectan cada vez que esta apretado el mouse y cada vez que esta suelta y luego cambia el valor del variable mouseDown a true o false
function mouseDown(){
  $(grillaDivs).mousedown(function(){
    mouseDown=true;
    console.log(mouseDown);
  });
};

function mouseUp(){
  $(grillaDivs).mouseup(function(){
    mouseDown=false;
    console.log(mouseDown);
  });
};

//si el mouse esta apretado, pinta el pixel con el color seleccionado

$(document).ready(function paint(){
    $(grillaDivs).mousemove(function(){
    if(mouseDown===true){
      cambioColordePixel(this);
    }else{
      return false
      console.log("mouseDown=False");
    };
    });
    });
//funcion para borrar la grilla 
$(document).ready(function borrarPixelesGrilla(){
  $("#borrar").click(function(){
    //variable que representa todos los divs de la grilla
    var pixelesGrilla = $("#grilla-pixeles div");
    pixelesGrilla.animate({"background-color": "white"}, 1000);
  });
});

//función para guarder la grilla como png 
$(document).ready(function guardarGrilla(){
  $("#guardar").click(function(){
    //variable que representa todos los divs de la grilla
    guardarPixelArt();
  });
});


//funcion que carga la imagen de batman a la grilla 
$(document).ready(function cargarBatman(){
  $("#batman").click(function(){
    console.log("batman");
    cargarSuperheroe(batman);
  });
});

//funcion que carga la imagen de Wonder Woman a la grilla 
$(document).ready(function cargarWonderWoman(){
  $("#wonder").click(function(){
    console.log("wonderWoman");
    cargarSuperheroe(wonder);
  });
});

//funcion que carga la imagen de flash a la grilla 
$(document).ready(function cargarFlash(){
  $("#flash").click(function(){
    console.log("flash");
    cargarSuperheroe(flash);
  });
});

//funcion que carga la imagen de Mujer Invisible a la grilla 
$(document).ready(function cargarInvisible(){
  $("#invisible").click(function(){
    console.log("invisible");
    cargarSuperheroe(invisible);
  });
});



$(document).ready(mouseUp());
$(document).ready(mouseDown());

