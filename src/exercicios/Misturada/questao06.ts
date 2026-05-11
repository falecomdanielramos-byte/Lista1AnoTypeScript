// 8-Escreva um algoritmo que desenvolva uma equação do segundo grau. O algoritmo
// deve ler 3 valores, calcular e retornar o valor de delta de o de Bhaskara ( Use a
// Biblioteca Matemática).

export function questao06():void{


    let a:number=Number(prompt("Informe o valor de A: "))
    let b:number=Number(prompt("Informe o valor de B: "))
    let c:number=Number(prompt("Informe o valor de C: "))

    let delta:number = (b**2) - (4 *a*c)

    if(delta < 0){
        alert(`Delta não possui raizes reais`)
    }else{
        let x1:number = (-b + Math.sqrt(delta)) / (2 * a)
        let x2:number = (-b - Math.sqrt(delta)) / (2 * a)
        window.alert(`x1 = ${x1} é o x2 = ${x2}`)
    }
    


}