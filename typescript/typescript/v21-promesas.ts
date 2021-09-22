(() => {
    /**
     * 
     * @param retiro numero
     * @returns disponible que es de tipo numero
     * @returns si la promersa no puede resolver devuelve un error.
     */
    let retirarDinero = ( retiro : number ) : Promise<number> => {
        
        let disponible : number = 1000;

        return new Promise(( resolve, reject ) => {
            if( retiro > disponible){
                reject( 'No hay saldo disponible' );
            }else{
                disponible -= retiro; // esto es igual a hacer diponible = diponible - retiro
                resolve( disponible );
            }
        });
    }
    
    retirarDinero( 1500 )
        .then( mensaje => console.log( `${ mensaje } ` ))
        /**
         * se puede escribir como:
         * .catch( err => console.warn( err ))
         */
        .catch( console.warn ) 
    
})();