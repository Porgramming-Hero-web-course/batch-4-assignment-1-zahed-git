{
    function validateKeys(obj, keys) {
        return keys.every(function (key) { return key in obj; });
    }
    var person = { name: "Alice", age: 25, email: "alice@example.com" };
    console.log(validateKeys(person, ["name", "age"]));
    console.log(validateKeys(person, ["name", "address"]));
}
