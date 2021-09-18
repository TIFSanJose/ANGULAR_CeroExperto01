(function(){

    const nombre = 'ramon';
    const apellido: string = 'da rosa';
    const edad: number = 36;

    function getEdad(){
        return 200 + 100 + 6;
    }

/**
 * Template literales
 * uso de los backticks  ``
 */
    const salida = ` 
    ${ nombre } 
    ${ apellido } 
    ( ${ edad } )`;

    console.log( salida + getEdad() );

    const salida1 = nombre + apellido + edad;
    
    console.log( salida1 );
    

}())



