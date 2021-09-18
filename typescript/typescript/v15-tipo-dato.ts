(function(){
    /**
     * Definiendo tipo de dato en typescript
     * se puede definir luego de los dos puntos "let nombrevariable : tipoDato = valorDato"
     */
    let mensaje: string = 'hola mundo';
    let numero: number = 123;
    let boolean: boolean = true;
    let hoy: Date = new Date();

    // tipo dato any: soporta cualquier tipo
    let cualquiercosa;

    cualquiercosa = mensaje;
    cualquiercosa = numero;
    cualquiercosa = boolean;
    cualquiercosa = hoy;

    let spiderman = {
        nombre: 'peter', 
        edad: 30
    };

    spiderman = {
        nombre: 'liza',
        edad: 25
    };
}())



