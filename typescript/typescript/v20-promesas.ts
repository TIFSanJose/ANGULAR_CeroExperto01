( function(){
    /**
 * PROMESAS
 * Se cambio en tsconfig.json la variable 'target' : 'es5' --> 'es6' 
 * Porque en es6 recien se incorpora las promesas
 */

        console.log( 'INICIO');

        const prom1 = new Promise( (resolve, reject)  => {
            setTimeout( () => {
                reject( ' se ejecuto la promersa ');
                
            }, 1000);
        });
    
        prom1
            .then( mensaje => console.log( mensaje ))
            .catch( err => console.warn(err))
        console.log( 'FIN');
})();