class Cohort {
  // A constructor is a special function that creates and
  // initializes an object instance of a class. In JavaScript,
  // a constructor gets called when an object is created using
  // the new keyword. The purpose of a constructor is to create
  // a new object and set values for any existing object properties
  constructor(name) {
    this.name = name
    this.capacity = 24
    this.students = []
  }
}
// export the class to be called upon
module.exports = Cohort
