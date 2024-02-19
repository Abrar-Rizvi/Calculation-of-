// Program for getting Percentage of subjects in exams

let arroFun = (Math:number, English:number, Urdu:number, Physics:number, Chemistry:number):number => {
    let sum:number =  Math + English + Urdu + Physics + Chemistry;
    let total : number = 500
    let divide : number = sum / total
    let percentage : number = divide * 100
    return percentage
}

const percPrint = arroFun() //required 4 arguments
console.log(`you got ${percPrint}% across the subjets`)