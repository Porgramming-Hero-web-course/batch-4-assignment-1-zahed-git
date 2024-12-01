{
    var calculateShapeArea = function (shapeIn) {
        if (shapeIn.shape === "circle") {
            return shapeIn.radius;
        }
        if (shapeIn.shape === "rectangle") {
            return shapeIn.width * shapeIn.height;
        }
                else{
                    return 0
        }
    };
    var circleArea = calculateShapeArea({ shape: "circle", radius: 10 });
    var rectangleArea = calculateShapeArea({
        shape: "",
        width: 4,
        height: 6,
    });
    console.log("Circle Area is-", circleArea, "Rectangle Area is-", rectangleArea);
}
