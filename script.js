function calcularMedia() {
    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);
    const nota3 = parseFloat(document.getElementById('nota3').value);

    const media = (nota1 + nota2 + nota3) / 3;
    const resultado = document.getElementById('resultado');

    if (media >= 6) {
        resultado.textContent = `Aprovado com média ${media.toFixed(2)}`;
        resultado.style.color = "green";
    } else {
        resultado.textContent = `Reprovado com média ${media.toFixed(2)}`;
        resultado.style.color = "red";
    }
}
