// 6- Ler uma temperatura em graus Celsius e apresentá-la convertida em graus
// Fahrenheit. A fórmula de conversão é: F=(9*C+160) / 5, sendo F a temperatura em
// Fahrenheit e C a temperatura em Celsius.

export function questao04():void{

    let Celsius:number=Number(prompt("Informe os Graus em °C para a conversão em °F: "))

    let F:number = (9*Celsius+160)/5

    window.alert(`O ${Celsius}° Convertido para fahrenheit é ${F}`)


}