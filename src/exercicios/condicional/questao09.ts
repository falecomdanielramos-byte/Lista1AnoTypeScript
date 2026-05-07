// 11-Ler dois valores para as variáveis A e B, e efetuar as trocas dos valores de forma
// que a variável A passe a possuir o valor da variável B e a variável B passe a possuir
// o valor da variável A. Apresentar os valores trocados.


export function questao09():void{

    let A:number=Number(prompt("Informe o valor de A: "))
    let B:number=Number(prompt("Informe o valor de B: "))

    let temp:number = B
    B = A
    A = temp

    window.alert(`O valor Trocado é: ${A && B}`)
}