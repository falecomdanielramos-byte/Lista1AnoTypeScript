// 6- Ler uma temperatura em graus Celsius e apresentá-la convertida em graus
// Fahrenheit. A fórmula de conversão é: F=(9*C+160) / 5, sendo F a temperatura em
// Fahrenheit e C a temperatura em Celsius.
// todas as formas de conversões

import { soma } from "./soma.js";
import { subtracao } from "./subtracao.js";
import { multiplicacao } from "./multi.js";

export function Q6Modularizada():void{
    let nu1:number=Number(prompt("Informe um número: "))
    let nu2:number=Number(prompt("Informe outro número: "))

    let op:number=Number(prompt("Informe qual opção de operações: \n (1-Soma)\n(2-Subtração)\n(3-Multiplicação)\n(4-Divisão)"))

    if(op == 1){
        let resultado:number = soma(nu1,nu2)
        window.alert(`A Soma dos números foi: ${resultado}` )
    }
    else if(op == 2){
        let resultado:number = subtracao(nu1,nu2)
        window.alert(`A Subtração dos números foi: ${resultado}`)
    }
    else if(op == 3){
        let resultado:number = multiplicacao(nu1,nu2)
        window.alert(`A multiplicação dos números foi: ${resultado}`)
    }
}