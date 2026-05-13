// 16- Ler um valor e escrever se é positivo ou negativo (considere o valor zero
// como positivo).
// com repetição


export function QuestADD015():void{
    let contP:number=0,contN:number=0

    let n:number =Number(prompt("Informe a quantidade de vezes que Vai rodar: "))
    for(let i:number=0;i >= n;i++){
        let num:number=Number(prompt("Informe o número: "))

        if(num >= 0){
            contP++
        }else{
            contN++
        }
    }
    window.alert(`A quantidade de números Positivos foi dé: ${contP}\n A quantidade de números Negativos foi dé:${contN}`)
}