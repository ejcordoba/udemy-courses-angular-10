//Función auto-invocada de flecha para evitar errores de variables reutilizadas
(()=>{
    //objeto
    const avenger = {
       nombre: 'Steve',
       clave: 'Capitan América',
       poder: 'Droga'
    }
    //extraer propiedades
    /* console.log( avenger.nombre );
    console.log( avenger.clave );
    console.log( avenger.poder ); */
    //coger el objeto avenger y extraer todas sus propiedades, en este tipo de desestructuración no importa el orden
   /*  const {nombre, poder} = avenger;
    console.log( nombre );
    console.log( poder ); */
    //También funciona en los argumentos de una función
    /* const extraer = ( avenger: any ) => {
        const {nombre, poder} = avenger;
        console.log( nombre );
        console.log( poder );
    }
    extraer ( avenger ); */
    //Podemos pasarle directamente las propiedades extraídas
    const extraer = ( { nombre, poder }: any ) => {
        //const {nombre, poder} = avenger;
        console.log( nombre );
        console.log( poder );
    }
    //extraer ( avenger );
    //Desestructuración de arrays


    //Sin desestructurar:
    const avengers: string[] = ['Thor','Ironman','Spiderman'];
    console.log( avengers[0] );
    console.log( avengers[1] );
    console.log( avengers[2] );
    //Con desestructuración: puedo definir las variables en orden de suposición, con un objeto no es necesario, pero con un array si
    // const [ loki, hombre, arana] = avengers;
    //Si solo queremos un valor dejamos el resto vacío separados con comas
    //const [ , , arana] = avengers;
    /* console.log( loki );
    console.log( hombre ); */
    //console.log( arana );
    const extraerArr = ( [thor,ironman,spiderman]: string[]) => {
            console.log( thor );
            console.log( ironman );
            console.log( spiderman );
    }
    extraerArr(avengers);
})();