{
  interface Circle {
    shape: "circle";
    radius: number;
  }
  interface Rectangle {
    shape: "rectangle";
    width: number;
    height: number;
  }
  type Shape = Circle | Rectangle;

  const calculateShapeArea = (shapeIn: Shape):number => {
    if (shapeIn.shape === "circle") {
      return Math.PI* shapeIn.radius * shapeIn.radius;
    }
    if (shapeIn.shape === "rectangle") {
      return shapeIn.width * shapeIn.width;
    }
            else{
                return 0
    }
  
  };
  const circleArea = calculateShapeArea({ shape: "circle", radius: 10 });
  const rectangleArea = calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
  });
  console.log(
    "Circle Area is-",
    circleArea,
    "Rectangle Area is-",
    rectangleArea
  );
}
