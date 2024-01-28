class Shape {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    console.log(`이 사각형의 넓이는 ${this.width * this.height}입니다.`);
  }
}

let rec = new Shape(3, 4);
console.log(rec.getArea());

class Rectangle extends Shape {
  constructor(width, height, sqrt) {
    super(width, height);
    this.sqrt = sqrt;
  }

  getSqrt() {
    return `이 사각형의 대각선 길이는 ${Math.sqrt(
      this.width ** 2 + this.height ** 2
    )}입니다.`;
  }
}

let rec2 = new Rectangle(4, 5, 7);
console.log(rec2.getSqrt());
