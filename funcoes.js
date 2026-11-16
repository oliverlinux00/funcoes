// 1. Crie uma função que receba o nome de um aluno e suas três notas, calcule
// a média e informe se ele está aprovado (média maior ou igual a 7) ou
// reprovado. A mensagem deverá ser personalizada com o nome do aluno.


function media (nota1, nota2, nota3) {

    let mediaNota = (nota1 + nota2 + nota3) / 3

    if (mediaNota >= 7) {
        console.log("O aluno foi aprovado com nota média final de: " + parseInt(mediaNota))
    }

}

media(10,5,7)


// 2. Crie uma função que receba dois números e exiba a diferença entre eles.

function difNum (numero1, numero2) {

    console.log("A diferença do Numero 1 e Numero 2 é: " + (numero1 - numero2))

}

difNum(5,2)

// 3. Crie uma função que receba um número e exiba sua tabuada de
// multiplicação, utilizando um laço de repetição, do 1 ao 10.

function mult (numero) {

    for (let i = 0; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`)
    }

}

mult(5)


// 4. Crie uma função que receba a idade de uma pessoa e classifique sua faixa
// etária de acordo com as seguintes regras: menor que 12 anos: criança; de
// 12 até 17 anos: adolescente; de 18 até 59 anos: adulto; 60 anos ou mais:
// idoso. Ao final, exiba a classificação correspondente.

function classificacao (idade) {

    if (idade < 12){
        console.log("Criança")
    } else if (idade <= 17) {
        console.log("Adolescente")
    } else if (idade <= 59) {
        console.log("Adulto")
    } else {
        console.log("Idoso")
    }

}

classificacao (16)

// 5. Crie uma função que receba a largura e a altura de um retângulo, calcule sua
// área e exiba o resultado. (Para calcular a área de um retângulo, utilize a
// fórmula Área = base × altura), O resultado deve ser expresso em unidades de
// área, como centímetros quadrados (cm²)


function area (base, altura) {

    let calcArea = base * altura

    console.log(`A área do Retangulo é ${calcArea}`)

}   

area (12,10)



// 6. Crie uma função que receba um número e realize uma contagem regressiva
// até chegar a zero, utilizando um laço de repetição.


function contRegressiva (numero) {

    for (let i = 10; i >= 0; i--) {
        console.log(i)
    }

}

contRegressiva(10)


// 7. Crie uma função que receba o salário de um funcionário e aplique um
// aumento de acordo com as seguintes regras: salários menores que R$ 1.000
// recebem 20% de aumento, entre R$ 1.000 e R$ 2.000 recebem 15% e acima
// de R$ 2.000 recebem 10%. Ao final, exiba o novo salário.


function salario (salario) {

    if (salario < 1000) {
        console.log(`Aumento de 20% R$${(salario * 0.20) + salario}`)
    } else if (salario < 2000) {
        console.log(`Aumento de 15% R$${(salario * 0.15) + salario}`)
    } else {
        console.log(`Aumento de 10% R$${(salario * 0.10) + salario}`)

    }

}

salario(1500)



// 8. Crie uma função que receba um número e verifique se ele é par ou ímpar. Ao
// final, exiba uma mensagem informando o resultado.


function parOuImpar (numero) {

    if (numero % 2 == 0) {
        console.log("Par")
    } else {
        console.log("Impar")
    }

}   

parOuImpar(5)

// 9. Crie uma função que receba uma temperatura em Celsius e converta para
// Fahrenheit. A função também deverá receber uma informação opcional para
// definir se deseja realizar a conversão inversa, de Fahrenheit para Celsius.
// Caso essa informação não seja fornecida, deverá realizar a conversão
// padrão de Celsius para Fahrenheit.

function converterTemp (temperatura, tipo) {

    if (tipo == "f") {
        return (temperatura - 32) * 5 / 9
    } else {
        return (temperatura * 9 / 5) + 32
    }

}

console.log(converterTemp(140,"f"))



// 10. Crie uma função que receba três números representando os lados de
// um triângulo e verifique se ele é equilátero, isósceles ou escaleno.

function tipoTriangulo(lado1, lado2, lado3) {

    if (lado1 == lado2 && lado2 == lado3) {
        console.log("Triângulo equilátero!")

    } else if (lado1 == lado2 || lado1 == lado3 || lado2 == lado3) {
        console.log("Triângulo isósceles!")

    } else {
        console.log("Triângulo escaleno!")
    }

}

tipoTriangulo(5, 5, 5)

// 11. Crie uma função que receba um número inteiro positivo e calcule a
// soma de todos os números de 1 até o número informado, utilizando um laço
// de repetição. Exemplo: se o número informado for 5, deverá calcular 1 + 2 +
// 3 + 4 + 5 e exibir 15.

function somaNum (numero) {

    let soma = 0

    for (let i = 1; i <= numero; i++) {
        soma += i
    }

    return soma
}

console.log(somaNum(5))



// 12. Crie uma função que receba o valor de um produto e o percentual de
// desconto. O percentual de desconto deverá ser opcional, considerando 10%
// caso não seja informado. Ao final, exiba o valor do desconto e o preço final
// do produto.


function descontoProd(valor, desconto = 10) {

    let valorDesc = valor * (desconto / 100)

    let pfinal = valor - valorDesc

    console.log("Valor do desconto: R$ " + valorDesc)
    console.log("Preço final: R$ " + pfinal)

}

descontoProd(100)



// 13. Crie uma função que receba a altura, a idade e a informação se a
// pessoa possui algum problema cardíaco. Para entrar no brinquedo, a pessoa
// precisa ter altura maior ou igual a 1,50 m e idade maior ou igual a 12 anos.
// Caso possua algum problema cardíaco, não poderá utilizar o brinquedo,
// independentemente das demais condições.

function entradaParque (altura, idade, cardiaco) {

    if (altura >= 1.50 && idade >= 12 && cardiaco === false) {
        console.log("Entrada permitida!")
    } else {
        console.log("Entrada NÃO permitida!")
    }

}

entradaParque(1.70, 20, false)

// 14. Crie uma função que receba a distância percorrida por um veículo e a
// quantidade de combustível consumida. A função deverá calcular e exibir o
// consumo médio em quilômetros por litro. (a soma é Km/Litros)

function consumo(distancia, combustivel) {

    let consumoMedio = distancia / combustivel

    console.log("Consumo médio: " + consumoMedio + " km/l")

}

consumo(500, 40)


// 15. Crie uma função que receba um número e exiba todos os números
// pares entre 1 e o número informado, utilizando um laço de repetição.


function pares (numero) {

    for (let i = 1; i <= numero; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}

pares(10);


// 16. Crie uma função que receba o valor total de uma conta de restaurante
// e a quantidade de pessoas que irão dividir o pagamento. A quantidade de
// pessoas deverá ser opcional, considerando 2 pessoas caso não seja
// informada. Ao final, exiba quanto cada pessoa deverá pagar.


function divideConta (valorTotal, pessoas) {

    let valorPessoa = valorTotal / pessoas;

    console.log("Cada pessoa deverá pagar: R$" + valorPessoa);
}

divideConta(100, 4);


// 17. Crie uma função que receba uma nota de 0 a 10 e classifique o
// desempenho do aluno de acordo com as seguintes regras: nota maior ou
// igual a 9: excelente; nota maior ou igual a 7 e menor que 9: bom; nota maior
// ou igual a 5 e menor que 7: regular; nota menor que 5: insuficiente. Ao final,
// exiba a classificação correspondente.


function classificacaoNotas (nota) {
    if (nota >= 9) {
        console.log("Excelente");
    } else if (nota >= 7) {
        console.log("Bom");
    } else if (nota >= 5) {
        console.log("Regular");
    } else {
        console.log("Insuficiente");
    }
}

classificacaoNotas(10); 


// 18. Crie uma função que receba um número e exiba o seu quadrado.

function quadradoNum (numero) {
    let quadrado = numero ** 2;

    console.log("O quadrado do número é: " + quadrado);
}

quadradoNum (5);
