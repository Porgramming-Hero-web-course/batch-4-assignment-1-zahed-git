{const add =(sumArray:number[]):number=>{
    return sumArray.reduce((acc, num) => acc + num, 0)
}
console.log(add([1,2,3,4,5]))
}