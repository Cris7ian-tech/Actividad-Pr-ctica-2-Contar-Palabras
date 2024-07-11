function contarPalabras(string){
    //para separar string por espacios (.split)
    let palabras = string.split(` `)
    //Contar las palabras
    return palabras.length;
}
//Sugerencia para ingresar frase: la oscuridad, cubre toda la ciudad...
let string = prompt("Ingresa una frase que contenga varias palabras: ");
let resultado = contarPalabras(string);

console.log(`La frase "${string}" tiene "${resultado}" palabras. `);
