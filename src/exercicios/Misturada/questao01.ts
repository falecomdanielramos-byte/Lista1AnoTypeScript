// 3-Escreva um algoritmo para ler um valor (do teclado) e escrever (na tela) o seu
// antecessor.

export function questao01():void{
let numero:number = Number(prompt("Informe um número: "))

window.alert(`O antecessor do número ${numero} é : ${numero-1}`)
}