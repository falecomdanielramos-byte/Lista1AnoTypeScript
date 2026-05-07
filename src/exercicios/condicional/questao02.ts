// 4- Escreva um algoritmo para ler as dimensões de um retângulo (base e altura),
// calcular e escrever a área do retângulo.



export function questao02():void{


    let base:number = Number(prompt("Informe a base da dimensão: "))
    let altura:number = Number(prompt("Informe a altura da dimensão: "))

    let dimensao:number = base * altura

    window.alert(`A dimensão do retângulo é: ${dimensao}`)


}