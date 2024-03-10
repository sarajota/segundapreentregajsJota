let usuarios = []
let nombre = prompt("Ingrese su nombre")

usuarios.push (nombre)

let datos = {
    altura : Number(prompt("Ingrese su altura en metros")),
    peso : Number(prompt("Ingrese su peso en kilogramos")),
}

while (true) {
    if (datos.altura >= 0 && datos.altura <= 2.5) {
        break;
    } else {
        alert("Error: La altura debe estar expresada en metros");
        datos.altura = Number(prompt("Ingrese su altura en metros"));
    }
}


function calcularImc(peso, altura) {
    return peso / (altura * altura);
}

let imc = calcularImc(datos.peso, datos.altura);


if (imc < 18.5) {
    mensaje = "Bajo peso";
} else if (imc >= 18.5 && imc <= 24.9) {
    mensaje = "Peso normal";
} else if (imc >= 25 && imc < 29.9) {
    mensaje = "Sobrepeso";
} else {
    mensaje = "Obesidad";
}

let resultado = "Hola " + usuarios.at(-1) + "\n" + "Tu IMC es " + imc + " lo que indica que tu peso esta en la categoria " + mensaje + " para adultos de tu estatura" ;
console.log(resultado);

document.querySelector("h2").innerText = resultado