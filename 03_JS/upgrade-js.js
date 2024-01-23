// class Shape {
//     constructor(width, height){
//         this.width=width;
//         this.height= height;
//     }

//     getArea(){
//         console.log(`넓이는 ${this.width * this.height}입니다.`);
//     }
// }

// const rec1 = new Shape(3,5);
// console.log(rec1.getArea());

// class rectangle extends Shape{
//     constructor(width, height, sqrt){
//         super(width, height);
//         this.sqrt = sqrt;
//     }

//     getSqrt(){
//         console.log(`대각선의 길이는 ${Math.sqrt(this.width**2 + this.height**2)}입니다.`);
//     }
// }

// const rec2 = new rectangle(3,5,4);
// console.log(rec2.getSqrt());

// // class Triangle {
// //     constructor(width, height){
// //         this.width = width;
// //         this.height = height;
// //     }

// //     getArea(){
// //         console.log(`삼각형의 넓이는 ${1/2 * this.width * this.height}입니다.`);
// //     }
// // }
// // const tri = new Triangle(4,7);
// // console.log(tri.getArea());

// class Triangle extends Shape{
//     constructor(width, height){
//         super(width, height);
//     }

//     getArea(){
//         console.log(`삼각형의 넓이는 ${this.width * this.height / 2}입니다.`);
//     }
// }

// const tri2 = new Triangle(4,6);
// console.log(tri2.getArea());

// class Circle extends Shape{
//     constructor(width, height, radius){
//         super(width, height);
//         this.radius = radius;
//     }

//     getArea(){
//         return `원의 넓이는 ${Math.PI * this.radius**2}입니다.`;
//     }
// }
// const cir = new Circle(6,7,3);
// console.log(cir.getArea());

// console.log("*************복습******************")
// const a = [1,2,3,4,5];
// const b = [6,7,8];
// const ab = [...a, ...b];
// console.log(ab);
// const c = [..."Hello"];
// console.log(c);
// const d = [1,3,5,7,9];
// console.log(...d);

// const values = [10, 20, 30, 40, 50];
// function get(i, q, ...rest){
//     console.log(rest);
// }
// get(...values);



class Shape {
    constructor(width, height){
        this.width =width;
        this.height = height;
    }

    getArea(){
        console.log(`이 사각형의 넓이는 ${this.width * this.height} 입니다.`);
    }
}

let rec1 = new Shape(3,2);
console.log(rec1.getArea());

class rectangle extends Shape{
    constructor(width, height, sqrt){
        super(width, height);
        this.sqrt = sqrt;
    }

    getSqrt(){
        return `이 사각형의 대각선 길이는 ${Math.sqrt(this.width**2 + this.height**2)}입니다.`;
    }
}

let rec2 = new rectangle(5,5,5);
console.log(rec2.getSqrt());

class Triangle extends Shape{
    constructor(width, height){
        super(width, height);
    }

    getArea(){
        return `이 삼각형의 넓이는 ${this.width * this.height / 2}입니다.`;
    }
}

let tri = new Triangle(6,6);
console.log(tri.getArea());

class Circle extends Shape{
    constructor(width, height, radius){
        super(width, height);
        this.radius = radius;
    }

    getArea(){
        return `이 원의 넓이는 ${Math.PI * this.radius**2}`;
    }
}

let cir = new Circle(2,2,2);
console.log(cir.getArea());
