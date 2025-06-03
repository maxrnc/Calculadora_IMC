function calcular() {
    let peso = Number(document.getElementById("peso").value);
    let altura = Number(document.getElementById("altura").value);
    let resultado = document.getElementById("resultado");

    let imc = peso / (altura * altura);

    if (imc < 18.6) {
        let num_int = parseInt(imc);
        resultado.innerHTML = "Seu IMC é: " + num_int + "<br> Abaixo do Peso!";
        document.getElementById("resultado").style.color = "#eead2d";

    }
    else if (imc >= 18.6 && imc < 25) {
        let num_int = parseInt(imc);
        resultado.innerHTML = "Seu IMC é: " + num_int + "<br> Peso Ideal! (Parabéns)";
        document.getElementById("resultado").style.color = "green";
    }
    else if (imc >= 25 && imc < 30) {
        let num_int = parseInt(imc);
        resultado.innerHTML = "Seu IMC é: " + num_int + "<br> Levemente acima do Peso!";
        document.getElementById("resultado").style.color = "#eead2d";
    }
    else if (imc >= 30 && imc < 35) {
        let num_int = parseInt(imc);
        resultado.innerHTML = "Seu IMC é: " + num_int + "<br> Obesidade Grau I!";
        document.getElementById("resultado").style.color = "#f98404";
    }
    else if (imc >= 35 && imc < 40) {
        let num_int = parseInt(imc);
        resultado.innerHTML = "Seu IMC é: " + num_int + "<br> Obesidade Grau II! (Severa)";
        document.getElementById("resultado").style.color = "#ec5353";
    }
    else {
        let num_int = parseInt(imc);
        resultado.innerHTML = "Seu IMC é: " + num_int + "<br> Obesidade Grau III! (Mórbida)";
        document.getElementById("resultado").style.color = "#ff0000";
    }
}