// 6- Ler uma temperatura em graus Celsius e apresentá-la convertida em graus
// Fahrenheit. A fórmula de conversão é: F=(9*C+160) / 5, sendo F a temperatura em
// Fahrenheit e C a temperatura em Celsius.
// todas as formas de conversões

import { CparaF } from "./C+.js";
import { FparaC } from "./F+.js";
import { KparaC } from "./K+.js";
import { CparaK } from "./CpK.js";

export function Q6Modularizada():void{
    

    let op:number=Number(prompt("Informe qual opção de operações:\n(1-Celsius para Fahrenheit)\n(2-Fahrenheit para Celsius)\n(3-Kelvin para Celsius)\n(4-Celsius para Kelvin)"))

    if(op == 1){
        let Celsius:number=Number(prompt("Informe o valor de Celsius para a conversão para Fahrenheit: "))

        let resultado:number = CparaF(Celsius)
        window.alert(`A conversão de Celsius: ${Celsius} para farenheit foi: ${resultado.toFixed(3)}` )
    }
    else if(op == 2){
        let Fahrenheit:number=Number(prompt("Informe o valor de fahrenheit para conversão para Celsius"))

        let resultado:number = FparaC(Fahrenheit)
        window.alert(`A conversão de farenheit: ${Fahrenheit} para Celsius foi: ${resultado.toFixed(3)}`)
    }
    else if(op == 3){
        let Kelvin:number=Number(prompt("Informe o valor de kelvin para a conversão para Celsius: "))

        let resultado:number = KparaC(Kelvin)
        window.alert(`A conversão de Kelvin: ${Kelvin} para Celsius foi:${resultado.toFixed(3)}`)
    
    }
    else if(op == 4){
        let celsius:number=Number(prompt("Informe o valor de Celsius para conversão para Kelvin: "))

        let resultado:number = CparaK(celsius)
        window.alert(`A conversão de Celsius: ${celsius} para Kelvin foi: ${resultado.toFixed(3)}`)
    }
    else{
        alert(`Calculo não encontrado tente novamente!.`)
    }
}
