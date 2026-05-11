// 6- Ler uma temperatura em graus Celsius e apresentá-la convertida em graus
// Fahrenheit. A fórmula de conversão é: F=(9*C+160) / 5, sendo F a temperatura em
// Fahrenheit e C a temperatura em Celsius.
// todas as formas de conversões


export function QuestADD04(){

    let mensagem:number=0

    let op:number=Number(prompt("Informe as formas de conversão(1-Celsius > Fahrenheit)\n(2-Fehrenheit > Celsius)\n(3-Celsius > Kelvin)\n(4-Kelvin > Celsius) ou -1 para sair"))


    while(op != -1){


        switch(op){

            case 1:
                let Celsius:number=Number(prompt("Informe os Graus Celsius para Fehrenheit: "))
                
                mensagem = (9*Celsius+160)/5
                break;
            case 2:
                let Fahrenheit:number=Number(prompt("Informe os Graus em Fahrenheit para Celsius: "))

                mensagem = (5*Fahrenheit - 160)/9
                break;
            case 3:
                let celsius:number=Number(prompt("Informe os Graus de Celsius para Kelvin: "))

                mensagem = celsius + 273.15
                break;
            case 4:
                let Kelvin:number=Number(prompt("Informe os Graus Kelvin para Celsius: "))

                mensagem = Kelvin - 273.15
                break;
                

        }


        window.alert(`${mensagem}`)
        op = Number(prompt("Informe as formas de conversão(1-Celsius > Fahrenheit)\n(2-Fehrenheit < Celsius)\n(3-Celsius > Kelvin)\n(4-Celsius < Kelvin) ou -1 para sair"))
    }


}