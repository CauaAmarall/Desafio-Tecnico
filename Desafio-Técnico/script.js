// Função que calcula o somatório
function somatorioDivisiveisPor3ou5(numero) {
    let somatorio = 0;

    for (let i = 1; i < numero; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
        somatorio += i;
        }
    }

    return somatorio;
    }

// Função chamada quando o botão ou formulário é submetido
function calcularSomatorio() {
    let numeroUsuario = document.getElementById("numeroUsuario").value;
    numeroUsuario = parseInt(numeroUsuario);

    if (!isNaN(numeroUsuario) && numeroUsuario > 0) {
        let resultado = somatorioDivisiveisPor3ou5(numeroUsuario);

        // Exibe o resultado na div resultado
        document.getElementById("resultado").innerHTML = `
        <p>O somatório dos números divisíveis por 3 ou 5 até ${numeroUsuario} é: ${resultado}</p>
        `;
    } else {
        alert("Por favor, insira um número inteiro positivo válido.");
    }
}
