class Shape {
    constructor(width, height){
        this.width=width;
        this.height= height;
    }

    getArea(){
        console.log(`넓이는 ${this.width * this.height}입니다.`);
    }
}

const rec1 = new Shape(3,5);
console.log(rec1.getArea());

class rectangle extends Shape{
    constructor(width, height, sqrt){
        super(width, height);
        this.sqrt = sqrt;
    }

    getSqrt(){
        console.log(`대각선의 길이는 ${Math.sqrt(this.width**2 + this.height**2)}입니다.`);
    }
}

const rec2 = new rectangle(3,5,4);
console.log(rec2.getSqrt());

// class Triangle {
//     constructor(width, height){
//         this.width = width;
//         this.height = height;
//     }

//     getArea(){
//         console.log(`삼각형의 넓이는 ${1/2 * this.width * this.height}입니다.`);
//     }
// }
// const tri = new Triangle(4,7);
// console.log(tri.getArea());

class Triangle extends Shape{
    constructor(width, height){
        super(width, height);
    }

    getArea(){
        console.log(`삼각형의 넓이는 ${this.width * this.height / 2}입니다.`);
    }
}

const tri2 = new Triangle(4,6);
console.log(tri2.getArea());

class Circle extends Shape{
    constructor(width, height, radius){
        super(width, height);
        this.radius = radius;
    }

    getArea(){
        return `원의 넓이는 ${Math.PI * this.radius**2}입니다.`;
    }
}
const cir = new Circle(6,7,3);
console.log(cir.getArea());