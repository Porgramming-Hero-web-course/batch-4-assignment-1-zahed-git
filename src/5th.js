{
    var getProperty = function (obj, key) {
        return obj[key];
    };
    var person = { name: "Alice", age: 30 };
    var car = { brand: "toyota", year: 3000 };
    console.log(getProperty(person, "name"));
    console.log(getProperty(car, "brand"));
}
