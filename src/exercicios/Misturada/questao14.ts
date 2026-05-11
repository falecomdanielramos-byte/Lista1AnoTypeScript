// 15-Ler um valor e escrever a mensagem é MAIOR QUE 10! se o valor lido for maior
// que 10, caso contrário escrever NÃO É MAIOR QUE 10!



export function questao14(){
    let valor: number = Number(prompt("Informe o Valor: "))

    if(valor > 10){
        window.alert(`O valor É MAIOR QUE 10! valor:${valor}`)
    }else if(valor == 10){
        window.alert(`O valor É IGUAL A 10! valor:${valor}`)
    }
    else{
        window.alert(`O valor NÃO É MAIOR QUE 10! valor:${valor}`)
    }
}