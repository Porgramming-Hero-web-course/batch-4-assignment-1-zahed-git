{
    //     const car = new Car("Honda", "Civic", 2018);
    // car.getCarAge();
    // // Sample Output 1:
    // 6 (assuming current year is 2024)
    var Car = /** @class */ (function () {
        function Car(name, model, year) {
            this.name = name;
            this.model = model;
            this.year = year;
        }
        Car.prototype.getCareAge = function () {
            return 2025 - this.year;
        };
        return Car;
    }());
    var car = new Car("Honda", "Civic", 2018);
    console.log(car.getCareAge());
}
