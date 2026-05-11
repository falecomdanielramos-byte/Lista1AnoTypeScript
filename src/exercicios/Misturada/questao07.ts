// 9-Escreva um algoritmo para ler o salário mensal atual de um funcionário e o
// percentual de reajuste. Calcular e escrever o valor do novo salário.



export function questao07():void{
    let salario_fixo:number=Number(prompt("Informe o salário do funcionario: "))
    
    let reajuste:number=Number(prompt("Informe o valor do reajusta(inteiro): "))

    var percentual:number = reajuste/100

    var novo_sal:number = salario_fixo + (salario_fixo * percentual) 

    window.alert(`O novo valor do funcionario é de: ${novo_sal.toFixed(2)}`)
}