// import Cohort and Student from the src directory
const Cohort = require('./Cohort')
const Student = require('./Student')

class CohortManager {
  // A constructor is a special function that creates and
  // initializes an object instance of a class. In JavaScript,
  // a constructor gets called when an object is created using
  // the new keyword. The purpose of a constructor is to create
  // a new object and set values for any existing object properties
  constructor() {
    // The this value is different in each context. Class constructors
    // are always called with new , so their behavior is the same as function
    // constructors: the this value is the new instance being created. Class
    // methods behave like methods in object literals — the this value is the
    // object that the method was accessed on
    this.cohorts = []
    this.students = []
    this.studentsId = 1
  }
  // ensure when non specified characters are entered that an error message
  // is returned.
  addCohort(name) {
    const regex = /^[A-Za-z0-9 ]*$/
    if (name === '') {
      return 'invalid name'
    }
    if (regex.test(name)) {
      const newCohort = new Cohort(name)
      const selectedName = []

      this.cohorts.push(newCohort)

      this.cohorts.find((element) => {
        if (element.name === name) {
          selectedName.push(element)
        }
      })
      return selectedName.length ? 'cohort already exist' : this.cohorts
    }
    return 'invalid name'
  }

  // addStudent contains all the additional attributes when searched
  addStudent(name, lastname, email, gitLink, id) {
    // add attributes to cohort when entered
    id = this.studentsId++
    const newStudent = new Student(name, lastname, gitLink, email, id)
    this.students.push(newStudent)
    return newStudent
  }

  // search cohort attributes when inputting a search.
  searchByName(list, name) {
    const selectedItem = []
    list.find((element) => {
      // if entered data and stored data are same, return said.
      if (element.name === name) {
        selectedItem.push(element)
      }
    })

    const selectedList = list === this.students ? 'student' : 'cohort'
    // return inputted data and message when data not present in stored.
    return selectedItem.length ? selectedItem : `${selectedList} not found`
  }

  // search by id specifically, and return corresponding stored
  // stored data if present.
  searchById(id) {
    const selectedItem = []
    this.students.find((element) => {
      if (element.id === id) {
        selectedItem.push(element)
      }
    })
    return selectedItem.length ? selectedItem[0] : 'student not found'
  }

  // assign student to cohort when relevant data is entered.
  assignStudentToCohort(studentId, cohort) {
    const selectedStudent = this.students.find((e) => e.id === studentId)
    const selectedCohort = this.cohorts.find((e) => e.name === cohort)
    if (selectedCohort === undefined || selectedStudent === undefined) {
      const undefinedElement =
        selectedCohort === undefined ? 'cohort' : 'student'
      // when irrelevant data entered, return error message.
      return `${undefinedElement} not found`
    }
    // use push to add student to cohort.
    selectedCohort.students.push(selectedStudent)
    return selectedCohort
  }
  // remove cohort from stored data.
  removeCohort(cohort) {
    const selectedCohort = this.searchByName(this.cohorts, cohort)
    // return all iterations of data belonging to selected cohort.
    if (typeof selectedCohort === 'string') {
      return selectedCohort
    }
    // use splice to remove selected data from array.
    this.cohorts.forEach((c, index) => {
      if (c === selectedCohort[0]) {
        this.cohorts.splice(index, 1)
      }
    })
    console.log(selectedCohort)
    // return updated list of cohorts.
    return this.cohorts
  }
  // remove individual student from cohort
  removeStudent(name) {
    const selectedStudent = this.searchByName(this.students, name)

    if (typeof selectedStudent === 'string') {
      return selectedStudent
    }
    this.students.forEach((c, index) => {
      if (c === selectedStudent[0]) {
        this.students.splice(index, 1)
      }
    })
    // return updated list of students
    return this.students
  }
}
// export data to be called upon in spec.
module.exports = CohortManager
