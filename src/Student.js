class Student {
  // varying info in relation to individual students
  // id, firtname, lastname, github, email.
  constructor(name, lastN, gitLink, email, id = 1) {
    this.id = id
    this.name = name
    this.lastN = lastN
    this.gitLink = gitLink
    this.email = email
  }
}
// export the info to be called upon by spec file.
module.exports = Student
