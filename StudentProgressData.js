// Represents the data structure for storing student progress information
class StudentProgressData {
  constructor(studentId, courseId, assignments) {
      this.studentId = studentId;
      this.courseId = courseId;
      this.assignments = assignments;
  }
}

// Represents the data structure for an assignment
class Assignment {
  constructor(assignmentId, title, status, submissionDate) {
      this.assignmentId = assignmentId;
      this.title = title;
      this.status = status;
      this.submissionDate = submissionDate;
  }
}

// Export the classes
module.exports = {
  StudentProgressData,
  Assignment
};
