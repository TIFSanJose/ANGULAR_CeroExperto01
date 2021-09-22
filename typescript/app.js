"use strict";
(() => {
    /**
     * Definiendo un objeto Xmen de tipo XMEN.
     */
    const xmen = {
        nombre: 'Wolverine',
        edad: 60,
        poder: 'garras',
        lanzarPoder() {
            return `mostrar ${this.poder}`;
        }
    };
    const xmen1 = {
        nombre: 'ciclope',
        edad: 21,
        poder: 'lazer',
        lanzarPoder() {
            return `${this.poder} por los hojos`;
        }
    };
    const enviarMision = (nombre) => {
        console.log(`Enviar ${nombre} a la mision`);
    };
    const volverAlCuartel = (nombre) => {
        console.log(`${nombre} debe volver al cuartel `);
    };
    enviarMision(xmen.nombre);
    enviarMision(xmen1.lanzarPoder());
    volverAlCuartel(xmen.nombre);
})();
