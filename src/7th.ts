{

class Car{
    name:string;
    model:string;
    year:number;
    constructor (name:string,model:string, year:number){
        this.name=name;
        this.model=model;
        this.year=year
    }
    getCareAge():number{
       return 2025-this.year
    }
}
const car= new Car("Honda", "Civic", 2018)
console.log(car.getCareAge()) 
}