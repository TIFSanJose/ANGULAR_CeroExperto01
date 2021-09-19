"use strict";
(function () {
    /**
     * Funciones flecha
     */
    var miFuncion = function miFunion(a) {
        return a;
    };
    var miFuncionF = function (a) {
        return a;
    };
    var hulk = {
        nombre: 'hulk',
        smash: function () {
            var _this = this;
            /**
             * La funcion flecha permite hacer uso del objeto this dentro de otro scope, lo que no seria posible
             * usando unicamente js.
             */
            // setTimeout( function () {
            setTimeout(function () {
                console.log(" " + _this.nombre + " smashh ");
            }, 1000);
        }
    };
    console.log(hulk.smash());
    console.log(miFuncionF('arrow function'));
}());
