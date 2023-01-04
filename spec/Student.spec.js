// declare a const and reference student in src file to apply.
const Student = require('../src/Student')

// describe() allows you to gather your tests into separate
// groupings within the same file, even multiple nested levels.
describe('Student', () => {
  // use let so that variable can be ammended when new values added
  let student
  // use beforeEach to test before each iteration.
  beforeEach(() => {
    student = new Student('Patrik', 'Ellini', 'random link', 'random email')
  })
  // test to see of searched cohort is returned upon entering parameters.
  it('should return a cohort with the given name', () => {
    // expected result
    expect(student).toBeInstanceOf(Student)
    expect(student.name).toEqual('Patrik')
  })
})
