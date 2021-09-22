"use strict";
(() => {
    console.log('INICIO');
    const prom1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(' se ejecuto la promersa ');
        }, 1000);
    });
    prom1
        .then(mensaje => console.log(mensaje))
        .catch(err => console.warn(err));
    console.log('FIN');
})();
