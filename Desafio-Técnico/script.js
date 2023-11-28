// Função que calcula o somatório
function sumsDivisibles(numero) {
  let sum = 0;

  for (let i = 1; i < numero; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
    }
  }

  return sum;
}

// Função chamada quando o botão ou formulário é submetido
function calculateSum() {
  let numberUser = document.getElementById("numberUser").value;
  numberUser = parseInt(numberUser);

  if (!isNaN(numberUser) && numberUser > 0) {
    let result = sumsDivisibles(numberUser);

    // Exibe o resultado na div resultado
    document.getElementById("result").innerHTML = `
      <p>O somatório dos números divisíveis por 3 ou 5 até ${numberUser} é: ${result}</p>
    `;
  } else {
    alert("Por favor, insira um número inteiro positivo válido.");
  }
}
