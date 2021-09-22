(() => {
/**
 *  Clases
 * Definicion; con palabra reservada 'class' 
 */

    class Advenger{
    // Propiedades
    // definiendo propiedades 
        nombre    : string;
        habilidad : string;
        edad      : number;
    // inicializando propiedades en el constructor
        constructor(
            nombre     : string, 
            habilidad  : string, 
            edad       : number ) {
            
                this.nombre    = nombre;
                this.habilidad = habilidad;
                this.edad      = edad;
        } 
    // Metodos
        poder() : string {
            return 'es mi poder';
        }
    }
    
    const atman = new Advenger('atman', 'encogerce', 30,);

    // Definicion e inicializacion de una clase en forma corta.
    class ligaJusticia {
        constructor(
            public superHeroe : string,
            public nombre     : string,
            public poder      : string,
            public usaCapa    : boolean
        ){
            this.superHeroe = superHeroe;
            this.nombre     = nombre;
            this.poder      = poder;
            this.usaCapa    = usaCapa;
        }
    }

    const superMan = new ligaJusticia('SuperMan', 'Clarc kent', 'Sentido y habilidades super desarrolladas', true);

    console.log( atman );
    console.warn( superMan );
    

})();