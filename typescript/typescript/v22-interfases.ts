(() => {
    /**
     * Defino una interfaz
     *     La interfaz permite crear un tipo de dato personalizado, el que puede contener 
     * tipos de datos y declaracion de metodos (funciones()).
     *     Es util para evitar errores.
     *     Al crear objetos que heredan de la interfaz, me facilita a la hora de editar los hijos 
     * creados, realizando los cambios en la interfaz, evitando tocar todos los hijos.
     */
    interface XMEN {
        /**
         * Definiendo atributos
         */
        nombre : string,
        edad   : number, 
        poder ?: string,
        /**
         * Declarando funciones
         */
        lanzarPoder(): string,
    }

    /**
     * Definiendo un objeto Xmen de tipo XMEN.
     */
    const xmen : XMEN = {
        nombre : 'Wolverine',
        edad   : 60, 
        poder  : 'garras',
        lanzarPoder () {
            return `mostrar ${ this.poder }`
        }
    }

    const xmen1 : XMEN = {
        nombre : 'ciclope',
        edad   : 21,
        poder  : 'lazer',
        lanzarPoder () {
            return `${ this.poder } por los hojos`
        }
    }

    const enviarMision = ( nombre: string) => {
        console.log(`Enviar ${ nombre } a la mision`);
        
    }

    const volverAlCuartel = ( nombre : string ) => {
        console.log( `${ nombre } debe volver al cuartel `);
        
    }



    enviarMision( xmen.nombre )
    enviarMision( xmen1.lanzarPoder() )
    volverAlCuartel( xmen.nombre )
})();