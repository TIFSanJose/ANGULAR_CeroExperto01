(() => {
/**
 * 
 * Tipado de retorno de la funcion, es decir definir que tipo dato debe retornar una funcion.
 * TypeScript en algunas funciones puede inferir el tipo de dato de retorno como en los dos 
 * primeros ejemplos a continuacion 
 */
    const suma = (a : number, b : number) => a + b;  
    
    const nombre = () => 'hola soy Jorge';

/**
 * 
 * Para los casos que no puede inferir el tipo de retorno.
 * 
 */
    const saldo = () : Promise<string> => {
        return new Promise((resolve, reject) => {
            resolve( 'Promesa resuelta' );
            reject( 'No se pude devolver lo prometido' );
        });
    }

    console.log(suma(1, 3));
    console.log( nombre() );
    console.log( saldo());
    

})();