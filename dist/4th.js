"use strict";
{
    const calculateShapeArea = (shape) => {
        console.log(shape.shape);
        //         if ("circle" in shape){
        // return shape.shape.radius*shape.radius*3.1416
        //         }
        //        if("rectangle" in shape){
        // return shape.width * shape.height;
        //         }
        //         else{
        //             return 0
        // }
    };
    const circleArea = calculateShapeArea({ shape: "circle", radius: 10 });
    // const rectangleArea = calculateShapeArea({
    //     shape: "rectangle",
    //     width: 4,
    //     height: 6,
    //   });
    // console.log("Circle Area is-",circleArea,"Rectangle Area is-",rectangleArea)
    //////////////////////////////////////////////
    // class Shape {getArea(): number{
    //     return 0
    // }}
    // class Circle extends Shape{
    //     radius:number
    //     constructor(radius:number){
    //         super()
    //         this.radius=radius
    //     }
    //     getArea(): number {
    //         return Math.PI*this.radius
    //     }
    // }
    // class Rectangle extends Shape{
    //     width: number
    //     height: number
    //     constructor(width:number,height:number){
    //         super()
    //         this.height=height
    //         this.width=width
    //     }
    //     getArea(): number {
    //         return this.width*this.height
    //     }
    // }
    // const calculateShapeArea=(param:Shape)=>{
    //     console.log(param.getArea())
    // }
    // const circle=new Circle()
    // const rectangle= new Rectangle()
}
