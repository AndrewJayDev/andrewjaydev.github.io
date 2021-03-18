var expect = chai.expect;

describe('Test de reservarHorario()', function(){
	it('Cuando se reserva un horario de un restaurant, el horario correspondiente se elimina del arreglo.', function(){
        listadoDeRestaurantes[0].reservarHorario("15:30");
        let horarios=listadoDeRestaurantes[0].horarios;
		expect(horarios).to.have.lengthOf(2);
    });
    it('Cuando se reserva un horario que el restaurant no posee, el arreglo se mantiene igual.', function(){
        let horarios=listadoDeRestaurantes[0].horarios;
        let initialLengthHorario= horarios.length;
        listadoDeRestaurantes[0].reservarHorario("12:00");
		expect(horarios).to.have.lengthOf(initialLengthHorario);
    });
    it('Cuando se intenta reservar un horario pero no se le pasa ningún parámetro a la función, el arreglo se mantiene igual.', function(){
        let horarios=listadoDeRestaurantes[0].horarios;
        let initialLengthHorario= horarios.length;
        listadoDeRestaurantes[0].reservarHorario();
		expect(horarios).to.have.lengthOf(initialLengthHorario);
	});
});
describe('Test de obtenerPuntuación()', function(){
	it('Dado un restaurant con determinadas calificaciones, la puntuación (que es el promedio de ellas) se calcula correctamente.', function(){    
    let puntuacion= listadoDeRestaurantes[0].obtenerPuntuacion();
		expect(puntuacion).to.equal(7.4);
    });
    it('Dado un restaurant que no tiene ninguna calificación, la puntuación es igual a 0.', function(){
        //resetea las calificaciones a 0 para el primer restaurant en el listado
        listadoDeRestaurantes[0].calificaciones=[];
        let puntuacion= listadoDeRestaurantes[0].obtenerPuntuacion();
		expect(puntuacion).to.equal(0);
    });
});
describe('Test de calificar(nuevaCalificacion)', function(){
    //test para ver si se agrega la nueva calificacion al array de calificaciones
    it('se agrega la nueva calificacion al array de calificaciones.', function(){
        listadoDeRestaurantes.calificaciones=[];
        listadoDeRestaurantes[0].calificar(2);
		expect(listadoDeRestaurantes[0].calificaciones).to.have.lengthOf(1);
    });
    //test para ver si lo que se agrega no es un integer, no se agrega al array
    it('si lo que se agrega no es un integer, no se agrega al array', function(){
        listadoDeRestaurantes.calificaciones=[2];
        listadoDeRestaurantes[0].calificar("two");
		expect(listadoDeRestaurantes[0].calificaciones).to.have.lengthOf(1);
    });
    //test para ver si lo que se agrega no es un integer positivo, no se agrega al array
    it('si lo que se agrega no es un integer positivo, no se agrega al array', function(){
        listadoDeRestaurantes.calificaciones=[2];
        listadoDeRestaurantes[0].calificar(-4);
		expect(listadoDeRestaurantes[0].calificaciones).to.have.lengthOf(1);
    });
    //test para ver si lo que se agrega no es un integer menos que 10, no se agrega
    it('si lo que se agrega no es un integer menos que 10, no se agrega', function(){
        listadoDeRestaurantes.calificaciones=[2];
        listadoDeRestaurantes[0].calificar(11);
		expect(listadoDeRestaurantes[0].calificaciones).to.have.lengthOf(1);
    });
});

describe('Test de buscarRestaurante(id)', function(){
    //testear si encuentra bien el id pasado por parametro
    it('testear si encuentra bien el id pasado por parametro.', function(){
      let resultado=listado.buscarRestaurante(1);
      expect(resultado).to.equal(listadoDeRestaurantes[0])
    });
    //testear si devuelve el error si el id pasado por parametro no se encuentra 
    it('testear si devuelve el error si el id pasado por parametro no se encuentra', function(){
        let resultadoError=listado.buscarRestaurante(67);
        expect(resultadoError).to.equal("No se ha encontrado ningún restaurant")
      });
});

describe('Test de obtenerRestaurantes(filtroRubro, filtroCiudad, filtroHorario)', function(){
//test para verificar si devuelve los restuarantes correctos segun los filtros
it('test para verificar si devuelve los restuarantes correctos segun los filtros', function(){
let resultado=listado.obtenerRestaurantes("Asiática","Londres","15:00");
expect(resultado[0]).to.equal(listadoDeRestaurantes[1]);
});
//test para verificar que no funciona si el valor recibido es distinto a null
it('test para verificar que no funciona si el valor recibido es null', function(){
  let resultado=listado.obtenerRestaurantes(null);
  expect(resultado).to.eql([]);
  });
});

describe('Test de Restaurante', function(){
  // calcule correctamente su precio base
  it('test para verificar si devuelve los restuarantes correctos segun los filtros', function(){
    let reserva1 = new Reserva (new Date(2018, 7, 24, 11, 00), 8, 350, "DES1");
    expect(reserva1.precioBase()).to.equal(2800)
  });
  //calcule correctamente su precio final, contemplando bien los descuentos y los adicionales
  it('calcule correctamente su precio final, contemplando bien los descuentos y los adicionales', function(){
    var reserva2 = new Reserva (new Date(2018, 7, 27, 14, 100), 2, 150, "DES200")
    expect(reserva2.precioFinal()).to.equal(100)
  });
  });