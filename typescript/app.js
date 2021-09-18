"use strict";
(function () {
    /**
     * Definiendo tipo de dato en typescript
     * se puede definir luego de los dos puntos "let nombrevariable : tipoDato = valorDato"
     */
    var mensaje = 'hola mundo';
    var numero = 123;
    var boolean = true;
    var hoy = new Date();
    // tipo dato any: soporta cualquier tipo
    var cualquiercosa;
    cualquiercosa = mensaje;
    cualquiercosa = numero;
    cualquiercosa = boolean;
    cualquiercosa = hoy;
    var spiderman = {
        nombre: 'peter',
        edad: 30
    };
    spiderman = {
        nombre: 'liza',
        edad: 25
    };
}());
