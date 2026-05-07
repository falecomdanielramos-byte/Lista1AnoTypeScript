// 14-Faça um algoritmo que leia três notas de um aluno, calcule e escreva a média final
// deste aluno. Considerar que a média é ponderada e que o peso das notas é 2, 3 e 5.
// Fórmula para o cálculo da média final é:

export function questao14():void{
    let no1:number=Number(prompt("Informe a 1º Nota: "))
    let no2:number=Number(prompt("Informe a 2º Nota: "))
    let no3:number=Number(prompt("Informe a 3º Nota: "))

    let media_fonal:number = (no1 *2 + no2 *3 + no3 *5)/10

    if(media_fonal > 6){
        window.alert(`Aluno Aprovado!! média de: ${media_fonal}`)

    }else{
        window.alert(`Aluno Reporvado!! média de: ${media_fonal}`)
    }
}