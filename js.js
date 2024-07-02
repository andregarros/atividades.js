//priemira questão
var nome = "andre"
console.log(`seu nome é ${nome}` )

//2 questao
const frutas = ["maçã", "banana", "morango"] //exibi e armazena valores
console.log(frutas)
//3 questao
const frutas1 = ["maçã", "banana", "morango"] //exibi e armazena valores
console.log(frutas[2])
//4 quetsão
var numero = 2
console.log(`a soma da area é ${2 * 2}`)

//5 questao
var a = 10
var b = 5
var c = 20
var soma = a + b
if(soma < 20){
    console.log(`a = ${a} b = ${b} c = ${c}`)
    console.log(`${a} + ${b} = ${soma} e menor que ${c}`)
}
//6 questao
var numero = '5'
var soma = numero + 10
console.log(`a soma é ${soma}`)

//7 questao
var nota1 = 10
var nota2 = 10
if(nota1 == nota2){
    console.log(`a soma de ${nota1} + ${nota2} = ${nota1 + nota2}`)
}
else if(nota1 != nota2 ){
    console.log(`a soma de ${nota1} x ${nota2} = ${nota1 * nota2}`)
}
//8 questao
for(let contador = 0; contador < 5; contador++){
    console.log(contador)
    //colocando o let não muda em nada,pois o var tbm é uma variavel
}
//9 questão
for(let n = 1; n < 4; n++){
    console.log(n)
    //colocando o let não muda em nada,pois o var tbm é uma variavel
}

//10 QUESTAO
var x = 10;
function minhaFuncao() {
    var y = 5;
    console.log(x + y);
    //A MINHA FUNÇÃO SOMOU O 10 + 5 = 15
  }

  minhaFuncao();

// 11 QUESTAO

var numero = '5'
if(numero === 5){
    console.log('o numero é igual a 5.')
}else if(numero == 5){
    console.log('o numero é igual a 5, com conversao de tipo') // o numero  deu conversão de tipo, pois ele teve que converter o numero que está em uma string
}else{
    console.log('o numero não é igual a 5')
}

//12 questao
var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (var i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        console.log("O número par atual é: " + numeros[i]);
    }
}
for (var i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 != 0) {
        console.log("O número par atual é: " + numeros[i]);
    }
}

//questao 13
var nota1 = 5
var nota2 = 10
var nota3 = 9
var media = (nota1 + nota2 + nota3) / 3
if(media >= 7){
    console.log(`media: ${media} situação do aluno: Aprovado`)
}else if(media >= 5){
    console.log(`media: ${media} situação do aluno: recuperação`)
}else{
    console.log(`media: ${media} situação do aluno: reprovado`)
}

//questao 14
var peso = 20
var altura = 1.70
var somapa = altura * altura + peso /2
if(somapa <= 18.5){
    console.log(`seu imc é ${somapa}, resultado: abaixo do peso`)
}else if(somapa >= 18.5 ){
    console.log(`seu imc é ${somapa}, resultado: peso ideal`)
}else if(somapa >= 30){
    console.log(`seu imc é ${somapa}, resultado: sobrepeso`)
}else if(somapa >= 40){
    console.log(`seu imc é ${somapa}, resultado: obesidade`)
}else if(somapa > 40){
    console.log(`seu imc é ${somapa}, resultado: obesidade mórbida`)
}

//questao 15
for(let tabuada = 1; tabuada <= 10; tabuada++){
        var nt = 8
        console.log(`${nt} x ${tabuada} = ${nt * tabuada}`)
}

//questao 16
var n1 = 4
var n2 = 0

if(n2 > 0){
    console.log(`${n1} / ${n2} = ${n1/n2}`)
}else if(n2 == 0){
    console.log("divisão impossivel, pois o zero não é divisivel, use numeros maiores que zero")
}
//questao 17
function calcularCustoViagem(distancia) {
    const consumoPorLitro = 9.8; // km por litro
    const precoGasolina = 5.24; // reais por litro
    const custoIda = (distancia / consumoPorLitro) * precoGasolina;
    const custoTotal = custoIda * 2; // Custo de ida e volta
    return custoTotal.toFixed(2); // Formata o resultado para 2 casas decimais
  }
  
  // Exemplo de uso:
  const distancia = prompt("Digite a distância que será percorrida (em km):");
  const custo = calcularCustoViagem(Number(distancia));
  console.log(`O custo total para ir e voltar é: R$ ${custo}`);
  
  //questao 18
  function multiplyAntecessors(num) {
    let result = 1;
    
    for (let i = num; i > 0; i--) {
      result *= i;
    }
    
    return result;
  }
  const result = multiplyAntecessors(5);
console.log(result); // Output: 120 (5 x 4 x 3 x 2 x 1)

