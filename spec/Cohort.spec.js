// to initiate this process we need to call upon the cohort
// file within the src folder
const Cohort = require('../src/Cohort')
// describe() allows you to gather your tests into separate
// groupings within the same file, even multiple nested levels.
describe('Cohort', () => {
  // use let to to declare the cohort variable so that it can be
  // updated/ammended accordingly.
  let cohort
  // use a beforeEach function to ensure it is executed before
  // each test.
  beforeEach(() => {
    cohort = new Cohort('Test 1')
  })
  // we use it when testing our application.
  it('should return cohort with allocated name', () => {
    expect(cohort).toBeInstanceOf(Cohort)
    expect(cohort.name).toBe('Test 1')
  })
})
