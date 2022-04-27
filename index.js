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

//
// Constructor Function
function Circle(radius) {
  this.radius = radius
  this.draw = function() {
    console.log('draw');
  }
}

//
// exploring the constructor property's inherited function
const Circle1 = new Function ('radius', `
  this.radius = radius
  this.draw = function() {
    console.log('draw');
  }
`);

const circle3 = new Circle1(1);

console.log(circle3)
const another = new Circle(1);

//*IMPORTANT
// Enumerating properties
const circle4 = new Circle(10)

// Check all members of an object/each property key of an object and its value:
for (let key in circle4) {
  if (typeof circle4[key] !== 'function') //==> omit functions
    console.log(key, circle4[key]);
};

// Check all keys of an object:
const keys = Object.keys(circle4);

// Check if a key exists in an object:
if ('radius' in circle) {console.log("Yes, it exists")}

// private properties

function CirclePrivate(radius) {
  this.radius = radius;

  let defaultLocation = { x: 0, y: 0 } //--> using let instead of this. makes it a
                                      // local variable. It dies outside of the function
                                      // preventing access from the outside to this variable.
  let = computerOptimumLocation = function(factor) {
    // ....
  }

  this.draw = function() {
    let x, y; //--> only in scope within this inner function
    computerOptimumLocation(0.1); // --> in closure with this inner function (from parent function)

    console.log('draw');
  }
}

const circle5 = new CirclePrivate(10)
circle5.draw()