// Your code here
class Polygon {
  constructor(intArray) {
    this.intArray = intArray
  }

  get countSides() {
    return this.intArray.length
  }

  get perimeter() {
    return this.intArray.reduce((accumulator, currentValue) => accumulator + currentValue)
  }
}

class Triangle extends Polygon {

  get isValid() {
    //return this.countSides() === 3
    if ( this.intArray[0] + this.intArray[1] <= this.intArray[2] || this.intArray[0] + this.intArray[2] <= this.intArray[1] || this.intArray[1] + this.intArray[2] <= this.intArray[0]) {
      return false
    } else {
      return true
    }
  }

}

class Square extends Polygon {

  get isValid() {
    // if (this.countSides() === 4) {
    //   return this.intArray.every( ( val, i, array) => val === array[0])
    // } else {
    //   return false
    // }
    return this.intArray.every( ( val, i, array) => val === array[0])
  }

  get area() {
    return this.intArray[0] * this.intArray[1]
  }

}
