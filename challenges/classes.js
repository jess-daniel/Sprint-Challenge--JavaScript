// 1. Copy and paste your prototype in here and refactor into class syntax.
// function CuboidMaker(length, width, height) {
//     this.length = length;
//     this.width = width;
//     this.height = height;
//   }

//   CuboidMaker.prototype.volume = function() {
//     return this.length * this.width * this.height;
//   }

//   CuboidMaker.prototype.surfaceArea = function() {
//     return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
//   }

class CuboidMaker {
  constructor(cuboidAttribs) {
    this.length = cuboidAttribs.length;
    this.width = cuboidAttribs.width;
    this.height = cuboidAttribs.height;
  }
  volume() {
    return this.length * this.width * this.height;
  };
  surfaceArea() {
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
  }
}

const cuboid = new CuboidMaker({
    length: 4,
    width: 5,
    height: 5,
})
// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.
class CubeMaker extends CuboidMaker {
    constructor(cubeAttribs) {
        super(cubeAttribs);
        this.edge = cubeAttribs.edge;
    };
    volume() {
        return Math.pow(this.edge, 3);
    };
    surfaceArea() {
        return 6 * Math.pow(this.edge, 2);
    };
}

const cube = new CubeMaker ({
    length: 4,
    width: 5,
    height: 5,
    edge: 6
})

console.log(cube.surfaceArea());
console.log(cube.volume());