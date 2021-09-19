(function(){
/**
 * Funcones: parametros Obligatorios, Opcionales y PorDefecto.
 * Se debe segir ese orden de definicion de parametros en las funciones
 * 
 */

    function activar( obligatorio : string, opcional? : string, porDefecto : string = 'Batisenal' ){
        
        if (opcional) {
            console.log(` 
                ${ obligatorio } activo en la ${ opcional } la ${ porDefecto }`);
        } else {
            console.log(` 
                ${ obligatorio } activo la ${ porDefecto } `); 
        }
    }

activar( 'Gordon', '' ,'Batisenal' );
    

}())



