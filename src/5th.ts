{
    const getProperty=<x, y extends keyof x>(obj:x,key:y):x[y]=>{
        return obj[key]
    }
    const person = { name: "Alice", age: 30 }
    const car={brand:"toyota",year:3000}
    console.log (getProperty(person,"name"))
    console.log (getProperty(car,"brand"))
}