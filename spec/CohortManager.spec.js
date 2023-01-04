// to use Cohortmanager, we need to use CohortManager located
// in the src file.

const CohortManager = require('../src/CohortManager')

// describe() allows you to gather your tests into separate
// groupings within the same file, even multiple nested levels.
describe('addCohort', () => {
  let cohortM
  beforeEach(() => {
    cohortM = new CohortManager()
  })
  it('return all the cohorts, including those added', () => {
    cohortM.addCohort('test 1')
    cohortM.addCohort('test 2')
    expect(cohortM).toBeInstanceOf(CohortManager)
    expect(cohortM.cohorts[1].name).toBe('test 2')
  })

  it('the new cohort name should only contain numbers and letters', () => {
    expect(cohortM).toBeInstanceOf(CohortManager)
    // when selected criteria for naming has not been met, it will
    // return incorrect name
    expect(cohortM.addCohort('test 1?')).toBe('invalid name')
  })

  // When no text has been entered when naming a cohort, it will
  // return "invalid name"
  it('the new cohort must have a name', () => {
    expect(cohortM).toBeInstanceOf(CohortManager)
    expect(cohortM.addCohort('')).toBe('invalid name')
  })

  // when a cohort already exists, a message saying 'Cohort already exist'
  // will be displayed.
  it("should return 'cohort already exist' if there's another cohort with the same name", () => {
    cohortM.cohorts = [{ name: 'test 1', capacity: 24, students: [] }]
    expect(cohortM).toBeInstanceOf(CohortManager)
    expect(cohortM.addCohort('test 1')).toBe('cohort already exist')
  })
})

// describe() allows you to gather your tests into separate
// groupings within the same file, even multiple nested levels.
describe('searchByName', () => {
  let cohortM
  beforeEach(() => {
    cohortM = new CohortManager()
  })

  // test for when a cohort that exists is searched.
  it('should return the selected cohort', () => {
    cohortM.cohorts = [{ name: 'test 1', capacity: 24, students: [] }]
    const result = cohortM.searchByName(cohortM.cohorts, 'test 1')
    expect(cohortM).toBeInstanceOf(CohortManager)
    expect(result).toEqual([{ name: 'test 1', capacity: 24, students: [] }])
  })

  // test for when a cohort cannot be found.
  it('should return an error if the cohort is not found', () => {
    const result = cohortM.searchByName(cohortM.cohorts, 'test 1')
    expect(cohortM).toBeInstanceOf(CohortManager)
    expect(result).toEqual('cohort not found')
  })

  // test for when returning a searched for student.
  it('should return the selected student', () => {
    cohortM.students = [{ name: 'test 1', lastN: 'prova' }]
    const result = cohortM.searchByName(cohortM.students, 'test 1')
    expect(cohortM).toBeInstanceOf(CohortManager)
    expect(result).toEqual([{ name: 'test 1', lastN: 'prova' }])
  })
})

// describe() allows you to gather your tests into separate
// groupings within the same file, even multiple nested levels.
describe('addStudent', () => {
  let cohortM
  beforeEach(() => {
    cohortM = new CohortManager()
  })

  // test for when returning info on a searched student
  it('should add a student with the given informaions', () => {
    cohortM.addStudent('Patrik', 'Ellini', 'random link', 'random email')

    expect(cohortM).toBeInstanceOf(CohortManager)
    expect(cohortM.students[0].name).toEqual('Patrik')
  })
})
// assign a student to selected cohort
describe('assignStudentToCohort', () => {
  let cohortM
  beforeEach(() => {
    cohortM = new CohortManager()
  })

  // test to see if cohort with added student is returned.
  it('should return the updated cohort', () => {
    cohortM.students = [{ name: 'test 1', lastN: 'prova', id: 1 }]
    cohortM.cohorts = [{ name: 'cohort 7', capacity: 24, students: [] }]

    // declare a const that will contain all the components of the search
    // result
    const result = {
      name: 'cohort 7',
      capacity: 24,
      students: [{ name: 'test 1', lastN: 'prova', id: 1 }]
    }

    // The expect function is used every time you want to test a value.
    // You will rarely call expect by itself. Instead, you will use expect
    // along with a "matcher" function to assert something about a value
    expect(cohortM).toBeInstanceOf(CohortManager)
    expect(cohortM.assignStudentToCohort(1, 'cohort 7')).toEqual(result)
  })

  // test to see if error message is returned when student/cohort are
  // undefined.
  it('should return an error if the student or cohort are undefined', () => {
    cohortM.students = [{ name: 'test 1', lastN: 'prova', id: 1 }]
    expect(cohortM).toBeInstanceOf(CohortManager)
    expect(cohortM.assignStudentToCohort(1, 'cohort 8')).toEqual(
      'cohort not found'
    )
  })
})

// describe() allows you to gather your tests into separate
// groupings within the same file, even multiple nested levels.
describe('searchById', () => {
  let cohortM
  // use beforeEach to test before each iteration.
  beforeEach(() => {
    cohortM = new CohortManager()
  })
  // test to see if searched student is returned upon entering.
  it('should return the selected student', () => {
    cohortM.students = [{ name: 'test 1', lastN: 'prova', id: 1 }]
    const result = { name: 'test 1', lastN: 'prova', id: 1 }
    expect(cohortM).toBeInstanceOf(CohortManager)
    expect(cohortM.searchById(1)).toEqual(result)
  })
  // test to see if error shown if student not present.
  it('should return error if the student is not found', () => {
    expect(cohortM).toBeInstanceOf(CohortManager)
    expect(cohortM.searchById(1)).toEqual('student not found')
  })
})

// describe() allows you to gather your tests into separate
// groupings within the same file, even multiple nested levels.
describe('removeCohort', () => {
  let cohortM
  beforeEach(() => {
    cohortM = new CohortManager()
  })

  // test to see if updated list is returned.
  it('should return the updated list of cohorts', () => {
    cohortM.cohorts = [{ name: 'cohort 7', capacity: 24, students: [] }]

    // expected info return
    expect(cohortM).toBeInstanceOf(CohortManager)
    expect(cohortM.removeCohort('cohort 7')).toEqual([])
  })
  // test to see if error returned if cohort is non existant.
  it("should return an error if the cohort doesn't exist", () => {
    const result = cohortM.removeCohort('test 1')

    // expected return and response when cohort not present.
    expect(cohortM).toBeInstanceOf(CohortManager)
    expect(result).toEqual('cohort not found')
  })
})

// describe() allows you to gather your tests into separate
// groupings within the same file, even multiple nested levels.
describe('removeStudent', () => {
  let cohortM
  beforeEach(() => {
    cohortM = new CohortManager()
  })
  // test to see if updated list of students is returned.
  it('should return the updated list of students', () => {
    cohortM.students = [{ name: 'test 1', lastN: 'prova', id: 1 }]
    // expected result upon enter
    expect(cohortM).toBeInstanceOf(CohortManager)
    expect(cohortM.removeStudent('test 1')).toEqual([])
  })
  // test to see if error returned when cohort is non existant.
  it("should return an error if the cohort doesn't exist", () => {
    const result = cohortM.removeStudent('test 1')
    // expected return and response when student not present.
    expect(cohortM).toBeInstanceOf(CohortManager)
    expect(result).toEqual('student not found')
  })
})
