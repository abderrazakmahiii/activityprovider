// Handles interactions with the Teacher
class TeacherFacade {
  constructor(teacher) {
      this.teacher = teacher;
  }

  receiveInsights(teacherId, insights) {
      this.teacher.receiveInsights(teacherId, insights);
  }
}

// Export the class
module.exports = TeacherFacade;
