
// “Primero, vamos a construir una función pura y determinística.
//Esto es, una función que ante un mismo parámetro siempre
//devuelve lo mismo, y que no tiene efectos secundarios.”


// “Como paso siguiente, queremos hacer una función
//que nos memorice el resultado de esta primera función que desarrollamos.
//Imaginate que la primera función nos cuesta mucho ejecutarla,
//por eso queremos guardar su resultado.”


const fyncMemory = () => {

    let resultado = {}; //la variable resultado se convierte en un objeto para almacenar
    //los resultados en funcion de los parametros proporcionados
  
    return PuraFunction = (a, b) => {

    const clave = `${a}_${b}`;

        if(resultado.hasOwnProperty(clave)) {
            console.log(resultado.hasOwnProperty(clave));//devuelve true si la clave existe en el objeto
            return resultado[clave]; //Devuelve resultado almacenado en el resultado objeto
        } else {
            resultado[clave] = a + b;
            return resultado[clave];
        }

    };
}

//Si se ejecuta la funcion  se calcula la suma solo cuando se llama a parametros que no tenia ,
//Pero, si ya los tenia se devuelve el resultado almacenado en el objeto resultado

const saveMemory = fyncMemory();

const resultado1 = saveMemory(3, 4);
const resultado2 = saveMemory(3, 4);
const resultado3 = saveMemory(2, 1);
console.log("resultado 1: " + resultado1);
console.log("resultado 2: " + resultado2);
console.log("resultado 3: " + resultado3);

