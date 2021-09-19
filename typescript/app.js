"use strict";
(function () {
    /**
     * Funcones: parametros Obligatorios, Opcionales y PorDefecto.
     * Se debe segir ese orden de definicion de parametros en las funciones
     *
     */
    function activar(obligatorio, opcional, porDefecto) {
        if (porDefecto === void 0) { porDefecto = 'Batisenal'; }
        if (opcional) {
            console.log(" \n                " + obligatorio + " activo en la " + opcional + " la " + porDefecto);
        }
        else {
            console.log(" \n                " + obligatorio + " activo la " + porDefecto + " ");
        }
    }
    activar('Gordon', '', 'Batisenal');
}());
