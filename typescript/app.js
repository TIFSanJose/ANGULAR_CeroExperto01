"use strict";
(() => {
    /**
     *  Clases
     * Definicion; con palabra reservada 'class'
     */
    class Advenger {
        // inicializando propiedades en el constructor
        constructor(nombre, habilidad, edad) {
            this.nombre = nombre;
            this.habilidad = habilidad;
            this.edad = edad;
        }
        // Metodos
        poder() {
            return 'es mi poder';
        }
    }
    const atman = new Advenger('atman', 'encogerce', 30);
    // Definicion e inicializacion de una clase en forma corta.
    class ligaJusticia {
        constructor(superHeroe, nombre, poder, usaCapa) {
            this.superHeroe = superHeroe;
            this.nombre = nombre;
            this.poder = poder;
            this.usaCapa = usaCapa;
            this.superHeroe = superHeroe;
            this.nombre = nombre;
            this.poder = poder;
            this.usaCapa = usaCapa;
        }
    }
    const superMan = new ligaJusticia('SuperMan', 'Clarc kent', 'Sentido y habilidades super desarrolladas', true);
    console.log(atman);
    console.warn(superMan);
})();
