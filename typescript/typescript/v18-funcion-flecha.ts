(function(){
    /**
     * Funciones flecha
     */
    
        const miFuncion = function miFunion( a : string ){
            return a;
        }
    
        const miFuncionF = ( a : string) => {
            return a;
        }

        const hulk = {
            nombre:'hulk',
            smash (){
/**
 * La funcion flecha permite hacer uso del objeto this dentro de otro scope, lo que no seria posible
 * usando unicamente js. 
 */
                // setTimeout( function () {
                setTimeout(  () => {

                    console.log( ` ${ this.nombre } smashh `);
                }, 1000);
                
            }

        }
    
        console.log( hulk.smash() );
        console.log( miFuncionF( 'arrow function' ) );
        
    }())
    
    
    
    