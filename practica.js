//Cree una función que tome la edad en años y devuelva la edad en días.

const yearsToDays = (dias) => {
    const calcu = dias * 365;
    return calcu;
}

//Cree una función que encuentre el rango máximo de la tercera
//arista de un triángulo, donde las longitudes de los lados son
//todos números enteros.

const nextEdge = (side1, side2) => {
    const rang = parseInt(side1 + side2) - 1;
    return rang;
}

// En este desafío, un granjero te pide que le digas cuántas patas
//se pueden contar entre todos sus animales. El agricultor cría tres especies:

//     pollos = 2 patas
//     vacas = 4 patas
//     cerdos = 4 patas

// El granjero ha contado sus animales y te da un subtotal para cada especie. Tienes que
//implementar una función que devuelva el número total de patas de todos los animales.
// Ejemplos

// animales(2, 3, 5) ➞ 36

// animales(1, 2, 3) ➞ 22

// animales(5, 2, 8) ➞ 50

// notas

//     No olvides devolver el resultado.
//     El orden de los animales aprobados es animales (pollos, vacas, cerdos).
//     Recuerda que el granjero quiere saber el número total de patas y no el número total de
//animales.

const animals = (pollos, vacas, cerdos) => {
    const pollosTotal = 2 * pollos; // 8
    const vacasTotal = 4 * vacas; // 16
    const cerdosTotal = 4 * cerdos; // 16
    return pollosTotal + vacasTotal + cerdosTotal;
}

// Cree una función que devuelva la cantidad de fotogramas que se
// muestran en una cantidad determinada de minutos para un determinado
// FPS.
//FPS significa "cuadros por segundo" y es la cantidad de cuadros que
//muestra la pantalla de una computadora cada segundo.

// frames(1, 1) ➞ 60

// frames(10, 1) ➞ 600

// frames(10, 25) ➞ 15000


const fotogramas = (seg, fot) => {
    const fotograma = 60;
    const foSeg = fotograma * seg * fot;
    return foSeg;
}

//Cree una función que tome dos argumentos.
//Ambos argumentos son números enteros, a y b.
//Devuelve verdadero si uno de ellos es 10 o si su suma es 10.

//makesTen(9, 10) ➞ true

// makesTen(9, 9) ➞ false

// makesTen(1, 9) ➞ true

const diezTrue = (a,b) => {
    const isSum = a + b;
    if(isSum === 10 || a === 10 || b === 10) {
        return true;
    }else {
        return false;
    }
}

//Escriba una función que compruebe si una persona puede ver
//una película clasificada como MA15+. Se requiere una de las siguientes dos
//condiciones para la admisión:

// La persona tiene al menos 15 años.
// Tienen supervisión de los padres.

// La función acepta dos parámetros, age y isSupervised. Devuelve un booleano.

// acceptIntoMovie(14, true) ➞ true

// acceptIntoMovie(14, false) ➞ false

// acceptIntoMovie(16, false) ➞ true

// la edad es un decimal
// isSupervised es un valor booleano.

const acceptIntoMovie = (age, isSupervised) => {
    if(age >= 15) {
        console.log("está supervisado es mayor o igual a 15");
        return true;
    } else if(isSupervised) {
        console.log("está supervisado es true");
        return true;
    } else {
        console.log("no está supervisado es menor de 15");
        return false;
    }
}

//¡Los científicos han descubierto que en cuatro décadas, el mundo EXPLOTARÁ!
// También se necesitarán tres décadas para hacer que una nave espacial viaje a un
// nuevo planeta que pueda albergar a toda la población mundial.

// Debes calcular el número de personas que habrá dentro de tres décadas.

// La población variable es la población mundial actual.
// Supongamos que cada mes, alguien da a luz a más personas n.

// Devuelve el número de personas que habrá cuando la nave espacial esté completa.


//futurePeople(256, 2) ➞ 976 // 2 * 12 * 30 + 256 

// futurePeople(3248, 6) ➞ 5408

// futurePeople(5240, 3) ➞ 6320

//El destino de la humanidad está en tus cálculos. :) 

const futurePeople = (poblacion, n) => {
   const year = 12;
   const threeDecades = 30;
   const nacidosMonth = n * year;
   const peopleDecades = nacidosMonth * threeDecades;
   const completeSpaceship = poblacion + peopleDecades;
   return completeSpaceship;
}

// Un año bisiesto ocurre cada cuatro años, por lo que es un año que es perfectamente
// divisible por cuatro. Sin embargo, si el año es un múltiplo de 100
//(1800, 1900, etc.) el año debe ser divisible por 400.

// Escribe una función que determine si el año es bisiesto o no.

// leapYear(2020) ➞ true

// leapYear(2021) ➞ false

// leapYear(1968) ➞ true

const leapYear = (year) => {
    if(year % 4 === 0) {
        console.log("el año es divisible por 100, el año es bisiesto", year);
        return true;
    } else if(year % 400 === 0) {
        console.log("el año es divisible por 400", year);
        return true;
    } else {
        console.log("el año no es divisible por 100 ni por 400", year);
        return false;
    }
}


//Aquí hay una imagen de cuatro modelos. Algunos de los cubos están ocultos
//detrás de otros cubos.
//El modelo uno consta de un cubo.
//El modelo dos consta de cuatro cubos, y así sucesivamente...
//Escribe una función que tome un número n y
//devuelva el número de cajas apiladas en un modelo
//de n niveles de altura, visible e invisible.

//El paso n es un número entero positivo.

// stackBoxes(1) ➞ 1 // modelo 1 tiene un cubo

// stackBoxes(2) ➞ 4 // modelo 2 tiene cuatro cubos de 6 lados cada uno

// stackBoxes(0) ➞ 0 // modelo 0 no tiene cubos

const stackBoxes = (n) => {
    const cubosLados  = 6;
    console.log("lados de un cubo", cubosLados);
    const total = cubosLados * n;
    console.log("total de lados de todos cubos", total);
    const cuantosCubosHay = total / cubosLados * n;
    return cuantosCubosHay;
}
// console.log("este modelo tiene", stackBoxes(2) +  " cubos"); // debe retornar 4

//Escribe una función que acepte base (decimal), altura (decimal)
//y forma ("triángulo", "paralelogramo") como entrada y
//calcule el área de esa forma.

// areaShape(2, 3, "triangle") ➞ 3

// areaShape(8, 6, "parallelogram") ➞ 48

// areaShape(2.9, 1.3, "parallelogram") ➞ 3.77

//El area de un triangulo es 0.5 * b * h
//El área de un paralelogramo es b * h
//Suponga que el triángulo y el paralelogramo son las únicas entradas para la forma.

const areaForma = (base, altura, forma) => {
    const tria = 0.5 * base * altura;
    const paral = base * altura;
    if(forma === "triangle")   return tria;
    if(forma === "parallelogram") return paral;
}

// Un automóvil típico tiene capacidad para cuatro pasajeros y un conductor,
// lo que permite que viajen cinco personas. Dado un número n de personas,
// devuelva cuántos autos se necesitan para acomodar a todos cómodamente.

// carsNeeded(5) ➞ 1

// carsNeeded(11) ➞ 3

// carsNeeded(0) ➞ 0

//Es probable que queden algunas personas y que algunos autos no se llenen al máximo de su capacidad.

const carsNeeded = (persons) => {
    const auto = 1;
    const totalPersonas = persons * auto / 5;
    return Math.ceil(totalPersonas);
}
// console.log("autos que se necesitan", carsNeeded(11)); 


//FIBONACCI ENTRE 1 y 10 MOSTRANDO NUMEROS PARES,
//PUEDES PROBAR CON OTRO VALOR DISTINTO A 10


// const fibonnaciExercices = (n) => {
//     const fib = [0,1];

//     for(i=2; i<=n; i++) {
//         fib[i] = fib[i - 1] + fib [i - 2];
//     }
//     const par = n % 2 === 0;
//     const impar = n % 2 !== 0;
//     if(par) {
//         console.log("es par");
//         return fib.filter(numb => numb % 2 === 0);
//     } else {
//         console.log("es impar");
//         return fib.filter(numb => numb % 2 !== 0);
//     }
   
// }
// console.log("fibonacci par", fibonnaciExercices(10));
// console.log("fibonacci impar", fibonnaciExercices(11));


// En FizzBuzz se te pide imprimir los números del 1 al 100,
// exceptuando los múltiplos de 3 (donde debes imprimir “Fizz”) y
// los múltiplos de 5 (donde debes imprimir “Buzz”). Si son divisibles por 3 y 5
// se debe imprimir “FizzBuzz”

const fizzBuzzOne = (n) => {
    for (i=1; i<=n; i++) {
        if(i % 3 === 0){
            console.log(i, "fizz");
        }
        if(i % 5 === 0) {
            console.log(i, "buzz");
        } else if(i % 3 === 0 || i % 5 === 0){
            console.log(i, "fizzbuzz");
        } else {
            console.log(i)
        }
        console.log(i);
    }
}
// console.log(fizzBuzzOne(20));

const fizzBuzzTwo = (n) => {
    for (i=1; i<=n; i++) {
        if(i % 3 === 0 && i % 5 === 0) console.log(i, "fizzbuzz");
        else if(i % 3 === 0) console.log(i, "fizz");
        else if(i % 5 === 0) console.log(i, "buzz");
        else console.log(i);
        console.log(i);
    }
}
// console.log(fizzBuzzTwo(20));

//Cree una función que tome una matriz y devuelva los tipos de valores
//(tipos de datos) en una nueva matriz.

//arrayValuesTypes([1, 2, "null", []])
// ➞ ["number", "number", "string", "object"]

// arrayValuesTypes(["214", true, false, 2, 2.15, [], null])
// ➞ ["string", "boolean", "boolean", "number", "number", "object", "object"]

// arrayValuesTypes([21.1, "float", "array", ["I am array"], null, true, 214])
// ➞ ["number", "string", "string", "object", "object", "boolean", "number"]


const arrayValuesTypes = () => {
    const arr = [1, 2, "null", []];
    const NewArr = arr.map(elementoArray => typeof elementoArray)
    return NewArr;

};
//console.log(arrayValuesTypes());


//Escriba una función que tartamudee
//una palabra como si alguien tuviera dificultades para leerla.
//Las dos primeras letras se repiten dos veces con puntos
//suspensivos... y espacio después de cada una, y luego se
//pronuncia la palabra con un signo de interrogación?.

// stutter("incredible") ➞ "in... in... incredible?"

// stutter("enthusiastic") ➞ "en... en... enthusiastic?"

// stutter("outstanding") ➞ "ou... ou... outstanding?"
//Suponga que toda la entrada está en minúsculas y
//tiene al menos dos caracteres de longitud.


const stutter = () => {
    const word = 'incredible';
    const puntos = '...'
    const separarPalabra = word.split('', 2);
    const union = separarPalabra.join('');
    const addPuntos = union.concat(puntos);

    return addPuntos + ' ' + addPuntos + ' ' + word + '?';
}
//console.log(stutter());

//Cree una función que devuelva el valor ASCII del carácter pasado.

//No olvides devolver el resultado.

// ctoa("A") ➞ 65

// ctoa("m") ➞ 109

// ctoa("[") ➞ 91

// ctoa("\") ➞ 92

const ascii = (string) => {
    return string.codePointAt(0);
}
//console.log("el código ASCII para este string es", ascii("["));

//Cree una función que tome dos números y
//devuelva su suma como una cadena binaria.

// addBinary(1, 1) ➞ "10"

// addBinary(1, 2) ➞ "11"

// addBinary(4, 5) ➞ "1001"


// Cree una función que tome un número como argumento.
// Suma todos los números del 1 al número que le pasaste a la función.
// Por ejemplo, si la entrada es 4, su función debería devolver 10
// porque 1 + 2 + 3 + 4 = 10.
// Espere cualquier número positivo entre 1 y 1000.

// addUp(4) ➞ 10

// addUp(13) ➞ 91

// addUp(600) ➞ 180300

//Crea una función que cuente cuántas D hay en una oración.


//Su función debe ser insensible a mayúsculas y minúsculas.

// countDs("My friend Dylan got distracted in school.") ➞ 4

// countDs("Debris was scattered all over the yard.") ➞ 3

// countDs("The rodents hibernated in their den.") ➞ 3

// const countD = (string) => {
//     var letter = 0
//     for(i=0; i < string.length; i++) {
//         if(string[i].toLocaleLowerCase() === "d" ) {
//             letter++
//         }
//     } return letter
// }

// console.log(countD("The rodents hibernated in their den"));

const countD = (string) => {
    return string.toLowerCase().split("d").length - 1;
}
//console.log(countD("Debris was scattered all over the yard"));

//Por cada una de las 6 tazas de café que compro, obtengo una séptima
//taza gratis. En total, obtengo 7 tazas. Cree una función que
//tome n vasos comprados y devuelva como un número entero el número total
//de vasos que obtendría.

// totalCups(6) ➞ 7

// totalCups(12) ➞ 14

// totalCups(213) ➞ 248

// Número de vasos que compré + número de vasos que obtuve gratis.
// Solo se darán entradas válidas.

const totalTazas = (cafe) =>{
    const cafeGratis = cafe % 6 === 0 ? cafe / 6 : Math.floor(cafe / 6) + 1;
    const totalTazas = cafe + cafeGratis;
    return Math.floor(totalTazas);
}
//console.log(totalTazas(213)); no pude :( 

//Contrataste a tres programadores y (con suerte) les pagas.
//Cree una función que tome tres números (los salarios por hora de cada programador) y
//devuelva la diferencia entre el programador mejor pagado y el peor pagado.

// programmers(147, 33, 526) ➞ 493

// programmers(33, 72, 74) ➞ 41

// programmers(1, 5, 9) ➞ 8

const programador = (sal1, sal2, sal3) => {
    const max = Math.max(sal1, sal2, sal3)
    return max
}

//console.log(programador(100, 8000, 300));

// Dada una matriz de números enteros, determine si la suma de sus elementos es par o impar.

// El valor devuelto debe ser una cadena ("impar" o "par").

// Si la matriz de entrada está vacía, considérela como una matriz con un cero ([0]).

// evenOrOdd([0]) ➞ "even"

// evenOrOdd([1]) ➞ "odd"

// evenOrOdd([]) ➞ "even"

// evenOrOdd([0, 1, 5]) ➞ "even"

const sumParImpar = (matriz) => {
  
    console.log("matriz original", matriz);

    const ini = 0
    const numMatriz = matriz.reduce((valorAnterior, valorActual) =>
    valorAnterior + valorActual, ini)
    if(numMatriz % 2 === 0) {return " even"} else { return " odd"}
    
}
//console.log(sumParImpar([1,3,1]));


//Dada la longitud del lado x encuentra el área de un hexágono.

// areaOfHexagon(1) ➞ 2.6

// areaOfHexagon(2) ➞ 10.4

// areaOfHexagon(3) ➞ 23.4

// Devuelve nulo si la longitud del lado dada no es un número entero positivo.
// Redondea a la décima más cercana.

//Math.sqrt(9); // 3

const hexagonArea = (s) => {
    const tresLad = 3;
    const raizC = tresLad * Math.sqrt(tresLad)

    const totalRaiz = raizC * (s*s) / 2

    return totalRaiz 
}

//console.log(hexagonArea(3));

//Cree una función que tome una matriz que contenga solo números y devuelva el primer elemento.

// getFirstValue([1, 2, 3]) ➞ 1

// getFirstValue([80, 5, 100]) ➞ 80

// getFirstValue([-500, 0, 50]) ➞ -500

//El primer elemento de una matriz siempre tiene un índice de 0.

const getFirstValue = (arr) => {

    const arrFirtsElement = arr.find(ele => ele > 0);
    return arrFirtsElement
}

//console.log(getFirstValue([-500, 2, 3]));

//Dados dos argumentos, devuelve una matriz que contiene estos dos argumentos

// makePair(1, 2) ➞ [1, 2]

// makePair(51, 21) ➞ [51, 21]

// makePair(512124, 215) ➞ [512124, 215]

const makePair = (arg1, arg2) => {
    const arr =  [arg1, arg2];
    const newArr = arr.forEach(element => {
        console.log(element);
    });
    return newArr
}

//console.log(makePair([51 ,21]));

// Dado un objeto que contiene recuentos de votos positivos y negativos,
// devuelve el recuento de votos que se debe mostrar.
// Esto se calcula restando el número de votos negativos de los votos positivos.

// getVoteCount({ upvotes: 13, downvotes: 0 }) ➞ 13

// getVoteCount({ upvotes: 2, downvotes: 33 }) ➞ -31

// getVoteCount({ upvotes: 132, downvotes: 132 }) ➞ 0

//Solo puede esperar números enteros positivos para el recuento de votos.

const getVoteCount = (votes) => {
    const restVotes = votes.upvotes - votes.downvotes
    return restVotes
}

//console.log(getVoteCount({upvotes: 2,downvotes: 33}))

//Escribe una función para invertir una matriz.
// reverse([1, 2, 3, 4]) ➞ [4, 3, 2, 1]

// reverse([9, 9, 2, 3, 4]) ➞ [4, 3, 2, 9, 9]

// reverse([]) ➞ []


const reverse = (matriz) => {
    const newMatriz = matriz.reverse();
    return newMatriz
}

//console.log(reverse([1, 2, 3, 4]))

//¡Ayuda a corregir todos los errores en la
//función incrementItems! ¡Está destinado a agregar
//1 a cada elemento en la matriz!


// incrementItems([0, 1, 2, 3]) ➞ [1, 2, 3, 4]

// incrementItems([2, 4, 6, 8]) ➞ [3, 5, 7, 9]

// incrementItems([-1, -2, -3, -4]) ➞ [0, -1, -2, -3]

const incrementItems = (arr) => {
    const arrNew = arr.map(num => num +1)
    console.log(arrNew)
    return arrNew
}

//incrementItems([2,4,6,8])


// En FizzBuzz se te pide imprimir los números del 1 al
//100,
// exceptuando los múltiplos de 3
//(donde debes imprimir “Fizz”) y
// los múltiplos de 5 (donde debes imprimir “Buzz”).
//Si son divisibles por 3 y 5
// se debe imprimir “FizzBuzz”


// const fizzBuzz = (num) => {
//     for (i=0; i<=num; i++) {
//         console.log(i);
//         if(i%3 === 0) {
//             console.log(i, "fizz");
//         }
//         if(i%5 === 0) {
//             console.log(i, "buzz");
//         }
//         else if(i%5 === 0 ||i%3 === 0) {
//             console.log(i, "fizzbuzz");
//         }
//     }
// }

// fizzBuzz(20)

const fizzBuzz = (num) => {
    for(i=0; i<=num; i++){
        console.log(i);
        if(i%3 === 0) console.log(i , "fizz");
        if(i%5 === 0) console.log(i , "buzz");
        else if (i%3 === 0 || i% 5 === 0) console.log(i , "fizzbuzz");
        else console.log(i);
    }
}
//fizzBuzz(100)


//FIBONACCI ENTRE 1 y 10 MOSTRANDO NUMEROS PARES,
//PUEDES PROBAR CON OTRO VALOR DISTINTO A 10


// const fibonacci = (num) => {
//     const fib = [0,1];

//     for (i=2; i<=num; i++) {
//         fib[i] = fib[i - 1] + fib[i - 2]   
//         console.log(fib[i]);
//     }
//     if(i) {
//         console.log("es par");
//         return fib.filter(numb => numb % 2 === 0);
//     }
//     else {
//         console.log("es impar");
//         return fib.filter(numb => numb % 2 !== 0);
//     }
// }

//fibonacci(10)


// const fibonnaciExercices = (n) => {
//     const fib = [0,1];

//     for(let i = 2; i < n; i++) {
//         fib[i] = fib[i - 1] + fib[i - 2];
//     }
//     console.log("par", fib.filter(numb => numb % 2 === 0));
//     console.log("impar", fib.filter(numb => numb % 2 !== 0));

//     return fib;
// }
// console.log("fibonacci", fibonnaciExercices(20));



// const fiboSerie = (n) => {
//     const fib = [0,1];

//     for(let i = 2; i <= n; i++){
//         fib[i] = fib[i - 1] + fib[i - 2];
//     }
//     return fib
// }

// console.log("Serie Fibonacci", fiboSerie(10));



const fibonacciSeries = (n) => {
    const fib = [0,1];

    for(let i = 2; i <= n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    console.log("par", fib.filter(numb => numb % 2 === 0));
    return fib
}

//console.log("fibonaaci", fibonacciSeries(10)); 

const sumValArray = () => {
    const arr = [1,2,3,4,5,6,7,8,9];
    
    const initial = 0;
    const arrNew = arr.reduce((valorAnterior , valorActual) => valorAnterior + valorActual, initial);
    console.log(arrNew);
}

//sumValArray()

const array1 = [1,3,2]

//console.log(Math.max(...array1));

// const PrimeNumber = (n) => {
//     if(n == 0 || n == 1 || n == 4) return false;
//     for(let i = 2; i <= n/2; i++) {
//        if(n % i === 0) return false
//     }
//     return true

// }
// console.log(PrimeNumber(100))





const PrimeNumber = (n) => {
    for(let i = 2; i < n; i++){
        if(n % i === 0) return false;
    }
    return n !== 1;
}

let numerosPrimos = [];
let num = 100;

for(let j = 2; j < num; j++) {
    if(PrimeNumber(j)) {
        numerosPrimos.push(j)
    }
}
//console.log("numeros primos", numerosPrimos);



//Puede asignar variables de matrices como esta:


// const arr = [1, 2, 3, 4, 5, 6]
// // let a = arr[0]
// // let b = arr[1]

// let ab = arr.slice(0,2)
// console.log(ab);


//Con ES6, puede asignar variables de matrices de una manera mucho más sucinta.
//Cree las variables a y b de la matriz dada utilizando la sintaxis de asignación
//de desestructuración de ES6, donde a === 1 y b === 2.

// Create a function that accepts an array and returns the last item in the array.
// Examples

// getLastItem([1, 2, 3]) ➞ 3

// getLastItem(["cat", "dog", "duck"]) ➞ "duck"

// getLastItem([true, false, true]) ➞ true

const getLastItem = () => {
    const arr = ["cat", "dog", "duck"];

    const arrNew = arr.pop()
    console.log(arrNew);
}

//getLastItem()

//Cree una función que tome un número n y devuelva los primeros
//10 múltiplos de n con 1 agregado, separados por comas.

//nTablesPlusOne(7) ➞ "8,15,22,29,36,43,50,57,64,71"

// nTablesPlusOne(1) ➞ "2,3,4,5,6,7,8,9,10,11"

// nTablesPlusOne(3) ➞ "4,7,10,13,16,19,22,25,28,31"

const nTablesPlusOne = (n) => {

    const nx = [n]
    const pushArr = []
    
    const initial = 0
    const newArr = nx.reduce((valoranterior, valorActual) => valoranterior + valorActual, initial + 1);
    pushArr.push(newArr);

    for(let i = 0; i < 10; i++) {
        const arrS = pushArr[i] + n;
        pushArr.push(arrS);
 
    }
    console.log(pushArr);
}

nTablesPlusOne(3)