// Função que calcula o somatório
function sumOfNumbersDivisible(number) {
    let sum = 0;
  
    for (let i = 1; i < number; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
      }
    }
  
    return sum;
}

// Função chamada quando o botão ou formulário é submetido
function calculateSum() {
    let userNumber = document.getElementById("userNumber").value;
    userNumber = parseInt(userNumber);
  
    if (!isNaN(userNumber) && userNumber > 0) {
      let result = sumOfNumbersDivisible(userNumber);
      document.getElementById("result").innerHTML = `
        <p>O somatório dos números divisíveis por 3 ou 5 até ${userNumber} é: ${result}</p>
      `;
    } else {
      alert("Por favor, insira um número inteiro positivo válido.");
    }
}
