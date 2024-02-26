// Handles interactions with the Student
class StudentFacade {
  constructor(student) {
      this.student = student;
  }

  accessCourseContent(courseId) {
      this.student.accessCourseContent(courseId);
  }

  provideFeedback(studentId, courseId, feedback) {
      this.student.provideFeedback(studentId, courseId, feedback);
  }
}

// Export the StudentFacade class
module.exports = StudentFacade;
