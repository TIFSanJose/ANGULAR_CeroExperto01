(()=>{

  // Uso de Let y Const
  // var nombre = 'Ricardo Tapia';
  // var edad = 23;
  
  const nombre : string = 'Ricardo Tapia';
  let   edad   : number = 23;

  // var PERSONAJE = {
  //   nombre: nombre,
  //   edad: edad
  // };

  const PERSONAJE = {
    nombre: 'nombre',
    edad  : 23
  }

  // Cree una interfaz que sirva para validar el siguiente objeto
  var batman = {
    nombre: 'Bruno Díaz',
    artesMarciales: ['Karate','Aikido','Wing Chun','Jiu-Jitsu']
  }

  interface BATMAN {
    nombre : string, 
    artesMarciales : string[]
  }

  const _batman : BATMAN = {
    nombre         : 'Bruno Diaz',
    artesMarciales : [
        'Karate',
        'Aikido',
        'Wing Chun',
        'Jiu-Jitsu'
    ]
  } 

  // Convertir esta funcion a una funcion de flecha
  function resultadoDoble( a, b ){
    return (a + b) * 2
  }

  let _resultadoDoble = ( a : number, b : number) => (a + b )*2;

  // Función con parametros obligatorios, opcionales y por defecto
  // donde NOMBRE = obligatorio
  //       PODER  = opcional
  //       ARMA   = por defecto = 'arco'
  function getAvenger( nombre, poder, arma ){
    var mensaje;
    if( poder ){
      mensaje = nombre + ' tiene el poder de: ' + poder + ' y un arma: ' + arma;
    }else{
      mensaje = nombre + ' tiene un ' + poder
    }
  };

  const _getAvenger = (nombre : string, poder ?: string, arma : string = 'arco') => {
    let mensaje : string;

    if ( poder ) {
      mensaje = ` ${ nombre } tiene el poder de: ${ poder } y un arma: ${ arma }`;
    } else {
      mensaje = ` ${ nombre } tiene un ${ poder } `;
    }
  }
  // Cree una clase que permita manejar la siguiente estructura
  // La clase se debe de llamar rectangulo,
  // debe de tener dos propiedades:
  //   * base
  //   * altura
  // También un método que calcule el área  =  base * altura,
  // ese método debe de retornar un numero.

    class Rectangulo {
      constructor ( public base : number, public altura : number){
//        this.base = base, 
//        this.altura = altura
      }

    area = () =>  this.base * this.altura;
    }


})();