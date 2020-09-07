class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  getDiameter() {
    return (this.radius * 2).toFixed(2);
  }
  getCircumference() {
    return (2 * Math.PI * this.radius).toFixed(2);
  }
  getArea() {
    return (Math.PI * Math.pow(this.radius, 2)).toFixed(2);
  }
}

const circle = new Circle(10);
console.log('Diameter of the circle is: ' + circle.getDiameter());
console.log('Circumference of the circle is: ' + circle.getCircumference());
console.log('Area of the circle is: ' + circle.getArea());
