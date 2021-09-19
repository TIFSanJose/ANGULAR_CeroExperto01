"use strict";
(function () {
    /**
     * Desestructuracion de Datos = Objetos y Arreglos
     */
    var persona = {
        nombre: 'thor',
        direccion: 'asgard',
        trabajo: 'superheroe'
    };
    var datos = function (dato) {
        console.log(persona.nombre);
        console.log(persona.direccion);
        console.log(persona.trabajo);
    };
    datos(persona);
    /**
     * Desestructurando Datos en Objetos
     * El nombre en al desestrucuta debe ser igual al de las propiedades de los objetos
     */
    var datosDesestructurado = function (_a) {
        var nombre = _a.nombre, direccion = _a.direccion, trabajo = _a.trabajo;
        console.log(nombre);
        console.log(direccion);
        console.log(trabajo);
    };
    datosDesestructurado(persona);
    /**
     * Desestructura de datos en Arreglos
     * Aqui el nombre de las variables pueden ser distintas a las definidas en el arreglo.
     * Pero van a machear en el mismo orden que de definicion.
     */
    var vehiculo = ['auto', 'volkwaguen', 'tipo1'];
    var transporte = function (_a) {
        var tipo = _a[0], marca = _a[1], modelo = _a[2];
        console.log(tipo);
        console.log(marca);
        console.log(modelo);
    };
    transporte(vehiculo);
}());
