// 16- Ler um valor e escrever se é positivo ou negativo (considere o valor zero
// como positivo).


export function questao15(){
    let valor:number=Number(prompt("Informe um valor: "))

    if(valor >= 0){
        window.alert(`O valor é Positivo! valor:${valor}`)
    }else{
        window.alert(`O valor é Negativo! valor:${valor}`)
    }
}