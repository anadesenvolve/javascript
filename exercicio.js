
const soma = (num1, num2) => num1 + num2;
const subtrai = (num1, num2) => num1 - num2;
const multiplica = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num2 !== 0 ? num1 / num2 : "Divisão por zero não é permitida";

const mostraResultado = (num1, num2) => {
  console.log(`Soma entre ${num1} e ${num2}: ${soma(num1, num2)}`);
  console.log(`Subtração entre ${num1} e ${num2}: ${subtrai(num1, num2)}`);
  console.log(`Multiplicação entre ${num1} e ${num2}: ${multiplica(num1, num2)}`);
  console.log(`Divisão entre ${num1} e ${num2}: ${divide(num1, num2)}`);
};

mostraResultado(10, 5);
