class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  getDiameter() {
    console.log(`Diameter of the circle is: ${(this.radius * 2).toFixed(2)}`);
  }
  getCircumference() {
    console.log(
      `Circumference of the circle is: ${(2 * Math.PI * this.radius).toFixed(
        2
      )}`
    );
  }
  getArea() {
    console.log(
      `Area of the circle is: ${(Math.PI * Math.pow(this.radius, 2)).toFixed(
        2
      )}`
    );
  }
}

const circle = new Circle(10);
circle.getDiameter();
circle.getCircumference();
circle.getArea();
