(function(){
/**
 * Desestructuracion de Datos = Objetos y Arreglos
 */

    const persona = {
        nombre   : 'thor', 
        direccion: 'asgard', 
        trabajo  : 'superheroe'
    }

    let datos = ( dato: any ) => {
        console.log( persona.nombre );
        console.log( persona.direccion );
        console.log( persona.trabajo );
    }

    datos( persona );
/**
 * Desestructurando Datos en Objetos
 * El nombre en al desestrucuta debe ser igual al de las propiedades de los objetos
 */

    let datosDesestructurado = ( {nombre, direccion, trabajo} : any ) => {
        console.log( nombre );
        console.log( direccion );
        console.log( trabajo );
        
    }

    datosDesestructurado(persona);

/**
 * Desestructura de datos en Arreglos
 * Aqui el nombre de las variables pueden ser distintas a las definidas en el arreglo.
 * Pero van a machear en el mismo orden que de definicion. 
 */

    const vehiculo : string[] = ['auto', 'volkwaguen', 'tipo1']

    let transporte = ( [tipo, marca, modelo ] : any) => {
        console.log( tipo );
        console.log( marca );
        console.log( modelo );
        
    }

    
    transporte( vehiculo );
    
}())