// 7- Escrever um algoritmo que leia o nome de um vendedor, o seu salário fixo e o
// total de vendas efetuadas por ele no mês (em dinheiro). Sabendo que este vendedor
// ganha 15% de comissão sobre suas vendas efetuadas, informar o seu nome, o salário
// fixo e salário no final do mês.


export function questao05():void{

    let nome:string=String(prompt("Informe o nome do vendedor: "))
    let salario_fixo:number=Number(prompt("Informe o salário fixo do funcionario em R$: "))
    let vendas:number=Number(prompt("Informe a quantidade de vendas efetuadas por esse funcionario no final do mês: "))

    let total:number = salario_fixo+(vendas * 0.15)

    window.alert(`O funcionario ${nome}\n tem um salário fixo de ${salario_fixo.toFixed(2)} \n o salário no final do mês e de: ${total}`)
}