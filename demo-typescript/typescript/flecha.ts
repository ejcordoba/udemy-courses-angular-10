//Función auto-invaocada para evitar errores de variables reutilizadas
(function(){

    // Si declaramos la función en una constante no podremos sobreescribir la declaración de la función
    const miFuncion = function( a: string) {
        return a.toUpperCase();
    }
    //La misma función en versión "Función de flecha", si sólamente se va a retornar una línea de código se pueden ahorrar las llaves y el return
    const miFuncionF = ( a: string ) =>  a.toUpperCase();


    const sumarN = function( a:number, b:number) {
        return a + b;
    }
    const sumarF = ( a:number, b:number ) => a + b;
    console.log( sumarN (8,3) );
    console.log( sumarF (5,5) );

    const hulk = {
        nombre: 'Hulk',
        smash() {
            //setTimeout para ejecutar una función tras un tiempo(en milésimas de segundo)
            //Las funciones de flecha (setTimeout( ()=>)) no modifican a lo que apunta "this", this apunta a "const hulk"
            setTimeout( ()=> {

                console.log(`${ this.nombre } smash!!!`);

            }, 1000);
            
        }
    }
    //console.log( miFuncion('Normal') );
    //console.log( miFuncionF('Flecha') );

    hulk.smash();


})();