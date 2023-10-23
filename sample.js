class Number{

    constructor(num, name){
        this.num = num 
        this.name = name
    }
    show(superNum){
        console.log(this.num)
        return this.num + superNum
    }
}

let num = new Number(10, "karl")
console.log(num.show(10))

