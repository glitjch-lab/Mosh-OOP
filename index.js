// Basic example
const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1
  },
  draw: function() {
    console.log('draw')
  }
};

circle.draw();

// Factory function
function createCircle(radius) {
  return {
    radius,
    draw: function () {
      console.log('draw');
    }
  }
};

const circle2 = createCircle(1)
circle2.draw()

// Constructor Function
function Circle(radius) {
  this.radius = radius
  this.draw = function() {
    console.log('draw');
  }
}

//
// exploring the constructor property's function
const Circle1 = new Function ('radius', `
  this.radius = radius
  this.draw = function() {
    console.log('draw');
  }
`);

const circle3 = new Circle1(1);

console.log(circle3)
const another = new Circle(1);

//
// Enumerating properties
const circle4 = new Circle(10)

// Find each property key of an object and its value, use:
for (let key in circle4) {
  if (typeof circle(key) !== 'function') { //==> omit functions
    console.log(key, circle4(key));
  }
};

// Find all keys of an object, use:
const keys = Object.keys(circle4);

// Find if a key exists in an object, use:
if ('radius' in circle) {console.log("Yes, it exists")}
