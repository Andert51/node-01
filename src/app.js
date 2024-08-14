const frutas = require('./frutas') //exportacion que se guarda en una constante, es una exportacion a la vieja escuela 

frutas.forEach((fruta, index) => { //Se guarda en una variable temporal y recorre
    console.log('@@@ fruta => ', index, fruta)
})

//Este archivo suele contener lo mas importante de la aplicacion, .gitigonre hace que se ignoren ciertos archivos del proyecto para no subirse a la nube, 
//En este ejemplo se ignoran los modulos de node
//Uso de NPM y Git en general, Javascript 